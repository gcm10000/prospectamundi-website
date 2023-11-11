# Use an official Node.js runtime as the base image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Expose the port on which your Next.js application runs
EXPOSE 3000

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Use uma imagem Nginx como base para servir a aplicação construída
FROM nginx:alpine

# Copie os arquivos construídos para o diretório padrão do Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80
