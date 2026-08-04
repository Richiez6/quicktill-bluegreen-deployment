# Use official Node.js LTS image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]