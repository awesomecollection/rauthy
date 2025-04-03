# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 1: Frontend Build
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM node:20-slim AS frontend-builder
WORKDIR /app

# Copy frontend files and build
COPY frontend/ ./
COPY static/v1/ static/v1/
COPY templates/html/ templates/html/

RUN npm ci && \
    npm run build

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 2: Backend Builder Base
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM rust:1.85-bookworm AS builder

# Set frontend to noninteractive
ENV DEBIAN_FRONTEND=noninteractive
ENV CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_LINKER=x86_64-linux-gnu-gcc \
    CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER=aarch64-linux-gnu-gcc \
    PATH="/usr/local/cargo/bin:$PATH"

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    clang \
    gcc-aarch64-linux-gnu \
    g++-aarch64-linux-gnu \
    curl \
    ca-certificates \
    postgresql-client \
    libssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Add Rust targets for cross-compilation
RUN rustup target add aarch64-unknown-linux-gnu x86_64-unknown-linux-gnu && \
    rustup component add rustfmt

WORKDIR /app

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 3: Build Artifacts
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM builder AS build-release

# Re-declare ARGs required in this stage
ARG TARGETPLATFORM
ARG TARGETARCH
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Map TARGETARCH to Rust target triple
RUN case ${TARGETARCH} in \
        "amd64") echo "x86_64-unknown-linux-gnu" > /tmp/target_triple ;; \
        "arm64") echo "aarch64-unknown-linux-gnu" > /tmp/target_triple ;; \
        *) echo "Unsupported architecture: ${TARGETARCH}" && exit 1 ;; \
    esac

# Copy source code
COPY . .

# Build the backend
RUN cargo build --release --target $(cat /tmp/target_triple) && \
    mkdir -p out && \
    cp target/$(cat /tmp/target_triple)/release/rauthy out/rauthy_${TARGETARCH} && \
    mkdir -p out/empty && \
    mkdir -p out/static/v1 && \
    mkdir -p out/templates/html

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 4: Final Runtime Image
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM gcr.io/distroless/cc-debian12:nonroot

ARG BUILDPLATFORM
ARG TARGETPLATFORM
ARG TARGETOS
ARG TARGETARCH
ARG TARGET_USER="10001:10001"

USER $TARGET_USER
WORKDIR /app

# Copy directories and files
COPY --from=build-release --chown=$TARGET_USER /app/out/rauthy_$TARGETARCH ./rauthy
COPY --from=build-release --chown=$TARGET_USER /app/out/empty/ ./data/
COPY --from=build-release --chown=$TARGET_USER /app/out/static/v1/ ./static/v1/
COPY --from=build-release --chown=$TARGET_USER /app/out/templates/html/ ./templates/html/

# Copy frontend assets
COPY --from=frontend-builder --chown=$TARGET_USER /app/static/v1/ ./static/v1/
COPY --from=frontend-builder --chown=$TARGET_USER /app/templates/html/ ./templates/html/

# Copy TLS certificates and config
COPY --chown=$TARGET_USER ./tls/ca-chain.pem ./tls/ca-chain.pem
COPY --chown=$TARGET_USER ./tls/cert-chain.pem ./tls/cert-chain.pem
COPY --chown=$TARGET_USER ./tls/key.pem ./tls/key.pem
COPY --chown=$TARGET_USER ./rauthy-local_test.cfg ./rauthy-local_test.cfg

# Label with metadata
LABEL org.opencontainers.image.created="2025-04-03 05:00:46" \
      org.opencontainers.image.authors="type-checker" \
      org.opencontainers.image.source="https://github.com/awesomecollection/rauthy"

EXPOSE 8080

CMD ["/app/rauthy"]