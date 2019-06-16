FROM timbru31/node-alpine-git

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm i -g react-scripts@3.0.1
RUN npm i typescript@3.2.1

COPY . /app

EXPOSE 3000