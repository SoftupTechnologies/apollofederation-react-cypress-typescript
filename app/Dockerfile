## Build environment ##
FROM node as builder

# Create app directory
RUN mkdir -p /app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 3000