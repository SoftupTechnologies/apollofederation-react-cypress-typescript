FROM timbru31/node-alpine-git

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend
COPY package-lock.json /backend
COPY tsconfig.json /backend
COPY nodemon.json /backend

RUN npm install

COPY . /backend
RUN npm run build

EXPOSE 4000

CMD [ "node", "dist/index.js" ]
