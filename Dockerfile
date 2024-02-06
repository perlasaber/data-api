FROM node:14-alpine

WORKDIR /app

COPY . .

RUN nmp install --production

EXPOSE 8080