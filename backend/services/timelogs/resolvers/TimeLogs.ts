/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { timelogs, users } from "../mock";

export default {
    TimeLogs: {
        id(log) {
            return log.id;
        },
        author(log) {
            const found = users.find(username => username.id === log.authorID);
            return found && found.name ? found.name : null;
        },
        __resolveReference(user) {
            return timelogs.find(timelog => user.id === timelog.authorID);
        }
    }
}