FROM timbru31/node-alpine-git

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY . /app

EXPOSE 3000