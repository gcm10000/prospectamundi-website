FROM node:18-alpine AS base

ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

ENV PORT 3000

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
# RUN npm install
ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

RUN yarn install --production

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
# RUN npm run build
RUN yarn build


# Expose the port on which your Next.js application runs
EXPOSE 3000

RUN yarn build

# # set hostname to localhost
# ENV HOSTNAME "0.0.0.0"

# Start your Next.js application
RUN yarn build