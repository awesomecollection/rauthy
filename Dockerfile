# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 1: Frontend Build
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM node:20-slim AS frontend-builder
WORKDIR /app

# Copy frontend files
COPY frontend/ ./
COPY static/v1/ static/v1/
COPY templates/html/ templates/html/

RUN npm ci && \
    npm run build

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 2: Backend Builder Base
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM rust:1.85-bookworm AS builder

ENV DEBIAN_FRONTEND=noninteractive
ENV CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_LINKER=x86_64-linux-gnu-gcc \
    CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER=aarch64-linux-gnu-gcc \
    PATH="/usr/local/cargo/bin:$PATH"

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

RUN rustup target add aarch64-unknown-linux-gnu x86_64-unknown-linux-gnu && \
    rustup component add rustfmt

WORKDIR /app
COPY . .

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 3: Build Binary
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM builder AS build-release

ARG TARGETPLATFORM
ARG TARGETARCH

RUN case ${TARGETARCH} in \
        "amd64") echo "x86_64-unknown-linux-gnu" > /tmp/target_triple ;; \
        "arm64") echo "aarch64-unknown-linux-gnu" > /tmp/target_triple ;; \
        *) echo "Unsupported architecture: ${TARGETARCH}" && exit 1 ;; \
    esac

# Install sqlx-cli for migrations
RUN cargo install sqlx-cli --no-default-features --features rustls,postgres

# Build the backend
RUN cargo build --release --target $(cat /tmp/target_triple) && \
    mkdir -p out/empty out/static/v1 out/templates/html && \
    cp target/$(cat /tmp/target_triple)/release/rauthy out/rauthy_${TARGETARCH}

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Stage 4: Final Runtime Image
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM gcr.io/distroless/cc-debian12:nonroot

ARG TARGETARCH
ARG TARGET_USER="10001:10001"

WORKDIR /app

# Copy binary and create necessary directories
COPY --from=build-release /app/out/rauthy_${TARGETARCH} /app/rauthy
COPY --from=build-release /app/migrations /app/migrations

# Copy frontend assets
COPY --from=frontend-builder /app/static/v1/ /app/static/v1/
COPY --from=frontend-builder /app/templates/html/ /app/templates/html/

# Copy TLS certificates and config
COPY ./tls/ca-chain.pem /app/tls/ca-chain.pem
COPY ./tls/cert-chain.pem /app/tls/cert-chain.pem
COPY ./tls/key.pem /app/tls/key.pem
COPY ./rauthy-local_test.cfg /app/rauthy-local_test.cfg

# Create data directory
COPY --from=build-release /app/out/empty /app/data/

USER ${TARGET_USER}

LABEL org.opencontainers.image.created="2025-04-03 05:51:08" \
      org.opencontainers.image.authors="type-checker" \
      org.opencontainers.image.source="https://github.com/awesomecollection/rauthy"

EXPOSE 8080

# Run migrations at startup
CMD ["/app/rauthy", "--migrate"]