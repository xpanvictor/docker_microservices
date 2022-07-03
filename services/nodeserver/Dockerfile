FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json ./

RUN npm install --save

COPY . /app/

CMD [ "npm", "run", "start" ]