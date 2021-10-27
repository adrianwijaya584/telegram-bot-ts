FROM node:latest

RUN mkdir -p src
WORKDIR /src

COPY . /src

RUN npm i && npm run build
CMD [ "node", "build/index.js" ]