# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 1: Builder Base
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM rust:1.85-bookworm AS builder

# Set frontend to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js and other dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    clang \
    gcc-aarch64-linux-gnu \
    g++-aarch64-linux-gnu \
    curl \
    ca-certificates \
    gnupg \
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
ENV CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_LINKER=x86_64-linux-gnu-gcc \
    CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER=aarch64-linux-gnu-gcc \
    PATH="/usr/local/cargo/bin:$PATH"

# Set the working directory
WORKDIR /app

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 2: Build Artifacts
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM builder AS build-release

# Re-declare ARGs required in this stage
ARG TARGETPLATFORM
ARG TARGETARCH
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# --- Frontend UI Build ---
# Copy frontend package definitions and build frontend first
COPY frontend/package.json frontend/package-lock.json* ./frontend/
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# --- Rust Backend Build ---
# Copy Cargo files first for better caching
COPY Cargo.toml Cargo.lock ./

# Create dummy main.rs for dependency caching
RUN mkdir -p src && \
    echo "fn main() {}" > src/main.rs && \
    # Build dependencies
    cargo build --release --target ${TARGETARCH}-unknown-linux-gnu && \
    rm src/main.rs

# Copy the rest of the source code
COPY . .

# Build the final binary
RUN cargo build --release --target ${TARGETARCH}-unknown-linux-gnu && \
    mkdir -p out && \
    cp target/${TARGETARCH}-unknown-linux-gnu/release/rauthy out/rauthy_${TARGETARCH} && \
    mkdir -p out/empty

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 3: Final Runtime Image
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM alpine:latest AS final

ARG TARGETPLATFORM
ARG TARGETARCH

# Install necessary runtime dependencies
RUN apk add --no-cache ca-certificates

# Create necessary directories and set permissions
RUN mkdir -p /app/data /app/tls /app/static/v1 /app/templates/html && \
    adduser -D -u 10001 appuser && \
    chown -R appuser:appuser /app

USER appuser
WORKDIR /app

# Copy the compiled binary
COPY --from=build-release --chown=appuser:appuser /app/out/rauthy_${TARGETARCH} ./rauthy

# Copy configuration and TLS certificates
COPY --chown=appuser:appuser ./tls/ca-chain.pem ./tls/ca-chain.pem
COPY --chown=appuser:appuser ./tls/cert-chain.pem ./tls/cert-chain.pem
COPY --chown=appuser:appuser ./tls/key.pem ./tls/key.pem
COPY --chown=appuser:appuser ./rauthy-local_test.cfg ./rauthy-local_test.cfg

# Copy the empty data directory structure
COPY --from=build-release --chown=appuser:appuser /app/out/empty/ ./data/

# Copy frontend assets
COPY --from=build-release --chown=appuser:appuser /app/static/v1/ ./static/v1/
COPY --from=build-release --chown=appuser:appuser /app/templates/html/ ./templates/html/

EXPOSE 8080

CMD ["/app/rauthy"]