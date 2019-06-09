/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { gql } from 'apollo-server';

export const TimeLogsType = gql`
    type TimeLogs @key(fields: "id"){
        id: ID!
        log: String
        author: String @provides(fields: "name")
    }
`;

export default TimeLogsType;