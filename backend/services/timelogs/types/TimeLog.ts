/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { gql } from 'apollo-server';

export const TimeLogType = gql`
    type TimeLog @key(fields: "id"){
        id: ID!
        log: String
        author: User @provides(fields: "name")
    }

    extend type Mutation {
        addTimelog(log: String!): TimeLog
    }
`;

export default TimeLogType;