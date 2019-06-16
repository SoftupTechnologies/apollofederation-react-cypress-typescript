import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import { authMiddleware } from './middlewares/auth';
import { RequestHandlerParams } from 'express-serve-static-core';
import Config from './config';
import registerRoutes from './routes';

const app = express();

const registerMiddleWares = () => {
  app.use(bodyparser.json())
    .use(cors())
    .use(Config.path, authMiddleware as RequestHandlerParams)
}

const setup = () => {
  registerMiddleWares();
  registerRoutes(app);
}
export const listen = () => {
  try {
    app.listen({ port: Config.port }, () => {
      console.log(`🚀 Server ready at http://localhost:${Config.port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export const start = () => {
  setup();
  listen();
}
export default app;