#!/bin/sh

# Run database migrations
echo "Running database migrations..."
/app/rauthy migrate

# Start the application
exec "$@"