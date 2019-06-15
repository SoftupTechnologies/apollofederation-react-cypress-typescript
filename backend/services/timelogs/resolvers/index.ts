/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import TimeLog from './TimeLog';
import User from './User';
import { IResolvers } from './resolvers';

const Resolvers: IResolvers = {
    TimeLog,
    User,
}

export default Resolvers;
