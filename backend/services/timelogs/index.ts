/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { ApolloServer, AuthenticationError } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { schemas } from "./schemas";
import { Request } from "express";

interface IRequest extends Request {
    user: any
}
const server = new ApolloServer({
    schema: buildFederatedSchema(
        schemas()
    ),
    playground: true,
    context: async ({ req }: { req: IRequest }) => {
        try {
            const { headers } = req;
            if (headers && headers['user']) {
                const user = JSON.parse(headers.user as string);
                return {
                    user
                };
            }

        } catch (error) {
            throw new AuthenticationError(error.message);
        }
      },
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
