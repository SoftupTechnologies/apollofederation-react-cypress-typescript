/*
 * Project: backend
 * Created Date: Friday June 14th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import moment from 'moment';
import { IUser } from './interfaces/auth';

const date = moment().format('DD-MM-YYYY');

export const users: IUser[] = [
  {
    id: "1",
    name: "Shpetim Selaci",
    birthDate: date,
    title: "employee",
    username: "@s3l4ci",
    email: "demo.user1@softup.co",
    password: "$2a$12$dBRTJc45fePzSKvGhN5deOr0de/jKZZyOYm2RtsFWoJrXuzJ03Xri"
  },
  {
    id: "2",
    name: "Kristi Kristo",
    birthDate: date,
    title: "boss",
    username: "@kristi",
    email: "demo.user2@softup.co",
    password: "$2a$12$FreOmYOIw91ZHqpUQ6DSiOMDwlg8riMx0E79EpKA0VJRJgxLVu30q"
  },
  {
    id: "3",
    name: "Stivi Ndoni",
    title: "employee",
    birthDate: date,
    username: "@stivindoni",
    email: "demo.user3@softup.co",
    password: "$2a$12$kNn9JzmH0y1GREcEBO5T..cfVXQTgoqeZz4WPTToVdIzaZYrZBrqa"
  }
];