FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV=Development
ENV PORT=8000
ENV MONGO_URI=mongodb://localhost:27017/vulcanos-database

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8000

RUN yarn build

CMD ["node", "dist/src/server.js"]