FROM node:16-alpine as read_service_dev

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3200

CMD [ "node", "dist/main.js" ]