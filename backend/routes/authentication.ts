/*
* Project: backend
* Created Date: Friday June 14th 2019
* Author: shpetimselaci : info@softup.co
* -----
* Copyright (c) 2019 Softup Technologies
*/

import { Router } from 'express';
import Authentication from '../controllers/authentication';

const router = Router();

router.post('/login', Authentication.logIn);

export default router;