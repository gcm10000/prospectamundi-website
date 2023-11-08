FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which your Next.js application runs
EXPOSE 3000

ENV PORT 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# Start your Next.js application
CMD [ "npm", "start" ]