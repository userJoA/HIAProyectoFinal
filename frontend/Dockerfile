# Use the official image as a base image
FROM node:18.17.1 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build 

# Use NGINX as the production server
FROM nginx:alpine

# Copy the build files from the builder stage to the NGINX public directory
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
