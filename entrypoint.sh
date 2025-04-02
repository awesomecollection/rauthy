!/bin/sh
set -e

ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
  exec /app/rauthy_amd64 "$@"
elif [ "$ARCH" = "aarch64" ]; then
  exec /app/rauthy_arm64 "$@"
else
  echo "Unsupported architecture: $ARCH"
  exit 1
fi