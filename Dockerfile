# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 1: Builder Base
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Define the base builder image with Rust and necessary tools
ARG RUST_VERSION=1.85
FROM rust:${RUST_VERSION}-bookworm AS builder

# Set frontend to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js using the recommended installation method
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    clang \
    gcc-aarch64-linux-gnu \
    g++-aarch64-linux-gnu \
    curl \
    ca-certificates \
    gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    libssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Add Rust targets for cross-compilation
RUN rustup target add aarch64-unknown-linux-gnu x86_64-unknown-linux-gnu && \
    rustup component add rustfmt

# Set environment variables for cross-compilation linkers
ENV CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_LINKER=x86_64-linux-gnu-gcc
ENV CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER=aarch64-linux-gnu-gcc

# Set the working directory
WORKDIR /app

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 2: Build Artifacts
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM builder AS build-release

# Explicitly set the PATH to include Node.js/npm AND Rustup
ENV PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/nodejs:/root/.cargo/bin"

# Re-declare ARGs required in this stage (passed by buildx)
ARG TARGETPLATFORM
ARG TARGETARCH

# Build argument for the Database URL
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# --- Rust Backend Build Prep ---
USER root

# Copy Rust dependency definition files
COPY Cargo.toml Cargo.lock ./
# Cache Rust dependencies
RUN mkdir src && echo "fn main() {}" > src/main.rs
# Build for the correct architecture
RUN cargo build --release --target ${TARGETARCH}-unknown-linux-gnu --bin rauthy
RUN rm -f src/main.rs

# --- Frontend UI Build ---
# Copy frontend package definitions
COPY frontend/package.json frontend/package-lock.json* ./frontend/
# Copy the rest of the frontend source code
COPY frontend/ ./frontend/
# Install frontend dependencies
RUN cd frontend && npm install
# Build the frontend static assets
RUN cd frontend && npm run build

# --- Final Backend Build ---
# Copy the rest of the backend application source code
COPY . .

# Build the Rust application completely for the target architecture
RUN cargo build --release --target ${TARGETARCH}-unknown-linux-gnu --bin rauthy

# Create the out directory and copy the compiled binary
RUN mkdir -p out
RUN cp target/${TARGETARCH}-unknown-linux-gnu/release/rauthy out/rauthy_${TARGETARCH}
RUN mkdir -p out/empty

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 3: Final Runtime Image
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM alpine:latest AS final

ARG TARGETPLATFORM
ARG TARGETARCH

# Create necessary directories first
RUN mkdir -p /app/data /app/tls /app/static/v1 /app/templates/html

# Define the non-root user and group for the final image
ARG TARGET_USER="10001:10001"
RUN chown -R $TARGET_USER /app

USER $TARGET_USER

WORKDIR /app

# Copy the compiled binary from the 'build-release' stage
COPY --from=build-release --chown=$TARGET_USER /app/out/rauthy_${TARGETARCH} ./rauthy

# Copy configuration and TLS certificates
COPY --chown=$TARGET_USER ./tls/ca-chain.pem ./tls/ca-chain.pem
COPY --chown=$TARGET_USER ./tls/cert-chain.pem ./tls/cert-chain.pem
COPY --chown=$TARGET_USER ./tls/key.pem ./tls/key.pem
COPY --chown=$TARGET_USER ./rauthy-local_test.cfg ./rauthy-local_test.cfg

# Copy the empty data directory structure
COPY --from=build-release --chown=$TARGET_USER /app/out/empty/ ./data/

# Copy frontend assets
COPY --from=build-release --chown=$TARGET_USER /app/static/v1/ ./static/v1/
COPY --from=build-release --chown=$TARGET_USER /app/templates/html/ ./templates/html/

EXPOSE 8080

CMD ["/app/rauthy"]