# Usa uma imagem base com Node.js
FROM node:alpine as BUILD_IMAGE

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o contêiner (package.json e package-lock.json)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto para o contêiner
COPY . .

# Constrói a aplicação
RUN npm run build

# remove dev dependencies
RUN npm prune --production

FROM node:alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

# Expõe a porta 80
EXPOSE 80
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]