/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { timelogs, users } from "../mock";

export default {
    Query: {
        me(_, { id }) {
            return users[Number(id) - 1];
        }
    },
    User: {
        __resolveReference(object) {
            return users.find(user => user.id === object.id);
        },
        timelogs(user) {
            return timelogs.filter(timelog => timelog.authorID === user.id);
        },
        numberOfDailyLogs(user) {
            return timelogs.filter(review => review.authorID === user.id).length;
        },
    }

}