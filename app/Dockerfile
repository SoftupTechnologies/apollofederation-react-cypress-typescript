FROM timbru31/node-alpine-git

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
RUN yarn global add react-scripts@3.0.1
RUN yarn global add typescript@3.2.1

COPY . /app

EXPOSE 3000