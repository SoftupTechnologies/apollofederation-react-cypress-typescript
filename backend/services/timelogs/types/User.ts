/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { gql } from 'apollo-server';

export const UserType = gql`
    extend type Query {
        me(id: String!): User
    }
    type User @key(fields: "id") {
        id: ID!
        name: String
        username: String
        birthDate: String
        numberOfDailyLogs: Int
        timelogs: [TimeLogs]
    }
`;

export default UserType;