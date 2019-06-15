/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { timelogs } from "../mock";

export default {
    TimeLog: {
        id(log) {
            return log.id;
        },
        author(review) {
            return { __typename: "User", id: review.authorID };
        },
        __resolveReference(user) {
            return timelogs.find(timelog => user.id === timelog.authorID);
        }
    },
    Mutation: {
        addTimelog(_, { log }, { user: { id, name }}) {
            const timelog = {
                log,
                authorID: id,
                id: `${parseInt(timelogs[timelogs.length - 1].id, 10) + 1}`
            }
            timelogs.push(timelog)
            return {
                ...timelog,
                name
            }
        },
    }
}