/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import TimeLogs from './TimeLogs';
import User from './User';
import { IResolvers } from './resolvers';

const Resolvers: IResolvers = {
    TimeLogs,
    User,
}

export default Resolvers;
