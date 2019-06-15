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
        me: User
    }
    type User @key(fields: "id") {
        id: ID!
        name: String
        username: String
        title: String
        birthDate: String
        numberOfDailyLogs: Int
        timelogs: [TimeLog]
    }
`;

export default UserType;