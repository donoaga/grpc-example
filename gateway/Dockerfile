FROM node:16-alpine as dev

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./


RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]