/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { ApolloServer } from "apollo-server";
const { ApolloGateway } = require("@apollo/gateway");
const startServer = () => {
  setTimeout(async () => {
    try {
      // if (err) {
      //   console.log('herherhehrehrhe');

      //   return console.error(err);
      // }
      console.log("HEHREHRHERHEH");

      const gateway = await new ApolloGateway({
        serviceList: [
          { name: "timelogs", url: "http://timelogs:4001/graphql" },
        ],
      });
      const { schema, executor } = await gateway.load();
      const server = new ApolloServer({
        schema, executor, playground: false
      });
      server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
      });
    }
    catch (err) {
      console.error("oops!", err);
      // setTimeout(() => startServer(), 5000);
    };
  }, 5000);
}

startServer();