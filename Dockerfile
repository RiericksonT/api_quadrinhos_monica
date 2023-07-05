# Define a imagem base
FROM node:18.15.0-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json .
COPY package-lock.json .

# Instala as dependências
RUN npm install
RUN npm install bcrypt
# Copia o código fonte da aplicação
COPY . .

# Compila a aplicação
RUN npm run build

# Expõe a porta em que a aplicação vai rodar
EXPOSE 3000

# Define o comando para iniciar a aplicação

CMD npx prisma generate && npm run start:prod
