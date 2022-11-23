FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV=Development
ENV PORT=8000
# ENV MONGO_URI=mongodb://localhost:27017/vulcanos-database
ENV MONGO_URI=mongodb+srv://miguelAdmin:ufooQF12bxKuV1XS@vulcanos-pedidos.mvusfo9.mongodb.net/?retryWrites=true&w=majority


COPY package.json .

RUN yarn

COPY . .

EXPOSE 8000

RUN yarn build

CMD ["node", "dist/src/server.js"]