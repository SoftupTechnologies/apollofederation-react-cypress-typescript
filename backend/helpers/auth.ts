/*
 * Project: backend
 * Created Date: Thursday June 13th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import Jwt from 'jsonwebtoken';
import Config from '../config';
import { IUser } from '../interfaces/auth';

/**
* Validate JWT token
* @param token
*/
export const verify = async (token: string): Promise<IUser> => {
    const payload = await Jwt.verify(
        token,
        Config.auth.jwt.secret || '',
    ) as IUser;
    return payload;
};

/**
 * Sign params to generate a new JWT token
 * @param params
 */

export const sign = async (params: IUser) => {
    const token = await Jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + Config.auth.jwt.expirationInSeconds,
        iat: Math.floor(Date.now() / 1000),
        ...params,
      },
      (Config.auth.jwt.secret || ''),
    );
    return token;
};