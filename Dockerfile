# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 1: Builder Base
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Define the base builder image with Rust and necessary tools
ARG RUST_VERSION=1.85
ARG NODE_VERSION=22.14.0 # Or your preferred Node.js LTS version
ARG BASE_IMAGE=rust:${RUST_VERSION}-bookworm
FROM ${BASE_IMAGE} AS builder

# Set frontend to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Install build dependencies (compilers, clang) AND Node.js/npm
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    clang \
    gcc-aarch64-linux-gnu \
    g++-aarch64-linux-gnu \
    # Install Node.js and npm
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
    && apt-get install -y nodejs \
    # Clean up apt cache
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
# This stage performs the actual compilation based on the target platform
FROM builder AS build-release

# Re-declare ARGs required in this stage (passed by buildx)
ARG TARGETPLATFORM
ARG TARGETARCH

# Build argument for the Database URL (optional, only if build needs DB access)
ARG DATABASE_URL
# Set the DATABASE_URL environment variable if it was provided as a build-arg
# Seems necessary based on the justfile build task.
ENV DATABASE_URL=${DATABASE_URL}

# --- Rust Backend Build Prep ---

# Copy Rust dependency definition files
COPY Cargo.toml Cargo.lock ./
# Cache Rust dependencies
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release --target ${TARGETARCH}-unknown-linux-gnu --bin rauthy || true
RUN rm -f src/main.rs

# --- Frontend UI Build ---

# Copy frontend package definitions
COPY frontend/package.json frontend/package-lock.json* ./frontend/
# Install frontend dependencies (cache this layer)
RUN npm install --prefix frontend

# Copy the rest of the frontend source code
COPY frontend/ ./frontend/
# Build the frontend static assets
# This assumes the output goes to frontend/dist or similar,
# and subsequent steps or the Rust build process move them to static/ and templates/
# Adjust if npm run build directly outputs to the final static/ and templates/ directories.
RUN npm run build --prefix frontend

# --- Final Backend Build ---

# Copy the rest of the backend application source code
# Copy backend source code AFTER frontend build to better utilize cache
COPY . .

# Build the Rust application completely for the target architecture
# This build might implicitly use the assets generated by `npm run build`
RUN cargo build --release --target ${TARGETARCH}-unknown-linux-gnu --bin rauthy

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 3: Final Runtime Image
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Use a minimal distroless image with C library support
FROM gcr.io/distroless/cc-debian12:nonroot

# Automatically available buildx args, declare them again
ARG TARGETPLATFORM
ARG TARGETARCH

# Define the non-root user and group for the final image
ARG TARGET_USER="10001:10001"
USER $TARGET_USER

WORKDIR /app

# Create necessary directories for data, TLS, static assets, and templates
RUN mkdir -p /app/data /app/tls /app/static/v1 /app/templates/html

# Copy the compiled binary from the 'build-release' stage
COPY --from=build-release /app/target/${TARGETARCH}-unknown-linux-gnu/release/rauthy ./rauthy

# Copy configuration and TLS certificates from the build context
COPY --chown=$TARGET_USER ./tls/ca-chain.pem ./tls/ca-chain.pem
COPY --chown=$TARGET_USER ./tls/cert-chain.pem ./tls/cert-chain.pem
COPY --chown=$TARGET_USER ./tls/key.pem ./tls/key.pem
COPY --chown=$TARGET_USER ./rauthy-local_test.cfg ./rauthy-local_test.cfg

# Copy the empty data directory structure (ensure ./out/empty exists in your context)
COPY --chown=$TARGET_USER ./out/empty/ ./data/

# --- Copy Frontend Assets ---
# Copy the generated static UI assets from the build stage
# Adjust the source path if `npm run build` outputs directly to these paths
# or if the cargo build moves them. Assuming they are in the final locations
# within the /app directory of the build-release stage after all builds.
COPY --from=build-release --chown=$TARGET_USER /app/static/v1/ ./static/v1/
COPY --from=build-release --chown=$TARGET_USER /app/templates/html/ ./templates/html/

# Expose the application port if necessary (e.g., 8080)
EXPOSE 8080

# Set the default command to run the application
CMD ["/app/rauthy"]
