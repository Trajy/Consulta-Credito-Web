# Use uma imagem oficial do Node.js como base
FROM node:21

WORKDIR /app

COPY . .
COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
