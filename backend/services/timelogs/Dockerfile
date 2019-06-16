FROM timbru31/node-alpine-git

RUN mkdir -p /timelogs
WORKDIR /timelogs

COPY package.json /timelogs
COPY package-lock.json /timelogs
COPY tsconfig.json /timelogs
COPY nodemon.json /timelogs

RUN npm install

COPY . /timelogs
RUN npm run build

EXPOSE 4001

