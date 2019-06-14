/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { IRequest } from "./interfaces/auth";
import { authErrors } from "./constants";
import app, { start as startExpressServer } from './server';
import Config from "./config";

const { ApolloGateway } = require("@apollo/gateway");
const startServer = async () => {
  try {
    await startExpressServer();
    const gateway = await new ApolloGateway({
        serviceList: [
            { name: "timelogs", url: "http://timelogs:4001/graphql" },
        ],
    });
    const { schema, executor } = await gateway.load();
    const server = new ApolloServer({
        schema,
        executor,
        context: async ({ req }: { req: IRequest }) => {
            try {
                const { user } = req;
                if (user && user.error) {
                    throw new AuthenticationError(user.error);
                }
                if (user && user.email) {
                    return {
                        user,
                    };
                } else {
                    throw new AuthenticationError(authErrors.unAuthorized );
                }
            } catch (error) {
                throw new AuthenticationError(error.message);
            }
          },
        introspection: Config.graphql.introspection,
        playground: Config.graphql.playground,
    });
    server.applyMiddleware({ 
        app, 
        path: Config.graphql.path,
    });
  }
  catch (err) {
    console.error("oops!", err);
  };
}

startServer();