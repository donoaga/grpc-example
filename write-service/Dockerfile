FROM node:16-alpine as write_service_dev

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3100

CMD [ "node", "dist/main.js" ]