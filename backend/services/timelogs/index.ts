/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { schemas } from "./schemas";

const server = new ApolloServer({
    schema: buildFederatedSchema(
        schemas()
    ),
    playground: false
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
