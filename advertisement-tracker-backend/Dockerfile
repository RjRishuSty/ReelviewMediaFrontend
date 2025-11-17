FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --production

# Copy all project files INCLUDING .env
COPY . .
# If dotenvx is used, it must see the .env file
COPY .env .env


# Expose backend port
EXPOSE 8081

# Start backend server
CMD ["node", "src/index.js"]
