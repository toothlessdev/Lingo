FROM node:21-slim

WORKDIR /lingo-client

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]