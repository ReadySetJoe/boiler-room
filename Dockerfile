FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["sh", "-c", "npm run db:build && npm run dev"]
