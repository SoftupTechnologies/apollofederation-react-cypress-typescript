/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { timelogs, users } from "../mock";

export default {
  TimeLog: {
    id(log) {
      return log.id;
    },
    author(log) {
      const user = users.find(user => user.id === log.authorID)
      return { __typename: "User", ...user };
    },
    __resolveReference(user) {
      return timelogs.find(timelog => user.id === timelog.authorID);
    }
  },
  Mutation: {
    addTimelog(_, { log, totalHours }, { user }) {
      const timelog = {
        log,
        authorID: user.id,
        id: `${parseInt(timelogs[timelogs.length - 1].id, 10) + 1}`,
        totalHours
      }
      timelogs.push(timelog)
      return {
        ...timelog,
        author: user
      }
    },
  }
}