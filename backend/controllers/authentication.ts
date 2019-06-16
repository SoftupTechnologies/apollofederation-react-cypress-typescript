/*
 * Project: backend
 * Created Date: Friday June 14th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import { Request, Response } from 'express';
import { validateEmail } from '../helpers/validators';
import { sign } from '../helpers/auth';
import * as bcrypt from 'bcryptjs';
import { users } from '../services/timelogs/mock';
import { authErrors, serverErrors } from '../constants';

const logIn = async (req: Request, res: Response) => {
  try {
    const { body: { email, password } } = req;
    if (validateEmail(email)) {
      const user = users.find(user => user.email === email);
      if (user) {
        // const passwordsMatch = bcrypt.compare(password, user.password || '');
        const passwordsMatch = bcrypt.compare(password, user.password || '');
        if (passwordsMatch) {
          const token = await sign(user);
          return res.json({ token });
        }
        return res.status(403).json({ error: authErrors.invalidPassword });
      }
      return res.status(404).json({ error: authErrors.invalidAccount });
    }
    return res.status(403).json({ error: authErrors.invalidEmail });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: serverErrors.somethingWentWrong });
  }
}

export default {
  logIn
};