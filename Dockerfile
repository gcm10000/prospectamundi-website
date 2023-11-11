# Estágio de construção
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e as dependências para o contêiner
COPY package*.json ./
RUN npm install

# Copia os arquivos do código-fonte para o contêiner
COPY . .

# Constrói a aplicação Next.js
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copia os arquivos construídos do estágio de construção
COPY --from=builder /app/out /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
