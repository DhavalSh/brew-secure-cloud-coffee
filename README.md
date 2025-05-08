
# Starbucks Clone with AWS DevSecOps Integration

This project is a Starbucks clone built with React, Vite, TypeScript, and Tailwind CSS that demonstrates DevSecOps best practices and deployment on AWS.

## Project Overview

This application provides a responsive, user-friendly interface inspired by Starbucks, featuring:

- Product catalog with filtering
- Beautiful UI with Tailwind CSS
- DevSecOps pipeline information
- Docker containerization
- AWS deployment architecture

## DevSecOps Features

- Dockerized application with security best practices
- NGINX configuration with security headers
- Non-root user for container execution
- AWS deployment ready

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Usage

```bash
# Build the Docker image
docker build -t starbucks-clone .

# Run the container
docker run -p 8080:8080 starbucks-clone
```

## AWS Deployment

This application is designed to be deployed on AWS using:

- Amazon ECR for container registry
- Amazon ECS with Fargate for container execution
- Application Load Balancer for traffic distribution
- AWS WAF for security protection

## Security Features

- Content Security Policy headers
- Docker security best practices
- Non-root user execution
- X-Content-Type-Options and other security headers

## License

This project is for educational purposes only. Starbucks is a registered trademark of Starbucks Corporation.
