# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only necessary files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the static site
RUN npm run build

# Serve Stage (Nginx)
FROM nginx:alpine AS runner

# Set working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx content
RUN rm -rf ./*

# Copy static build output from builder stage
COPY --from=builder /app/out ./

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

LABEL org.opencontainers.image.source=https://github.com/fhir-aggregator/website

