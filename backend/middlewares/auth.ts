/*
 * Project: backend
 * Created Date: Thursday June 13th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { Response, NextFunction } from 'express';
import * as Auth from '../helpers/auth';
import { authErrors } from '../constants';
import { IRequest } from '../interfaces/auth';

export const authMiddleware = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      try {
        const result = await Auth.verify(token);
        req.user = result;
      } catch (error) {
        req.user = {
          error: authErrors.unAuthorized
        }
      }
    } else {
      req.user = {
        error: authErrors.missingToken,
      };
    }
  } else {
    req.user = {
      error: authErrors.missingToken,
    };
  }
  next();
};
