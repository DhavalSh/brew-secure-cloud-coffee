
# Build stage
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with security considerations
RUN npm ci --production=false && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM ubuntu:22.04 AS production

# Set noninteractive installation
ENV DEBIAN_FRONTEND=noninteractive

# Install Nginx and other required packages
RUN apt-get update && \
    apt-get install -y nginx curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Create a non-root user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -s /bin/bash -m appuser

# Set permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chmod -R 755 /usr/share/nginx/html && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Configure nginx to run with the non-root user
RUN mkdir -p /etc/nginx/conf.d/ && \
    echo 'server_tokens off;' > /etc/nginx/conf.d/security.conf && \
    echo 'add_header X-Content-Type-Options nosniff;' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header X-Frame-Options SAMEORIGIN;' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header X-XSS-Protection "1; mode=block";' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header Content-Security-Policy "default-src '\''self'\''";' >> /etc/nginx/conf.d/security.conf && \
    sed -i 's/user www-data;/user appuser;/' /etc/nginx/nginx.conf

# Switch to the non-root user
USER appuser

# Expose port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
