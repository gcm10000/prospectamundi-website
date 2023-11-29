# Usa uma imagem base com Node.js
FROM node:latest

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

# Define a porta em que a aplicação vai rodar dentro do contêiner
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
