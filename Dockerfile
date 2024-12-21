# Use Node.js as the base image
FROM node:latest

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY app.js .

# Expose port 8000
EXPOSE 8000

# Start the application
CMD [ "node", "app.js" ]