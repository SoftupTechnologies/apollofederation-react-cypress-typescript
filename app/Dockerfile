FROM timbru31/node-alpine-git

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
RUN yarn 
# for windows to run react-scripts
RUN yarn global add react-scripts@3.0.1 

COPY . /app

EXPOSE 3000