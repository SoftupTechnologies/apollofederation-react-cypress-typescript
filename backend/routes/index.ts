/*
 * Project: backend
 * Created Date: Friday June 14th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import Authentication from './authentication';

export default (app) => {
  app.use('/auth', Authentication);
};