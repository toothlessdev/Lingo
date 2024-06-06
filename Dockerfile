FROM node:21

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm ci

COPY public ./public
COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]