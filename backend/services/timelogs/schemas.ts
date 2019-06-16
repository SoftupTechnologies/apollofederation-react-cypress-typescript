/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import Resolvers from "./resolvers";
import { readdirSync } from "fs";
import { GraphQLSchemaModule } from "apollo-server";

export const schemas = () => {
  const PATH = __dirname + '/types/';
  const schema = readdirSync(PATH).map(key => {
    const typeDefs = require(PATH + key).default;
    return {
      resolvers: {
        ...Resolvers[key.split(/.js/)[0]],
      },
      typeDefs,
    };
  });
  return schema as GraphQLSchemaModule[];;
}