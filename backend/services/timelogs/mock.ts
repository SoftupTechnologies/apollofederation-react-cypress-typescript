/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import moment from "moment";

const date = moment().format('DD/MM/YYYY');
export const users = [
    {
        id: "1",
        name: "Shpetim Selaci",
        birthDate: date,
        title: "employee",
        username: "@s3l4ci"
    },
    {
        id: "2",
        name: "Kristi Kristo",
        birthDate: date,
        title: "boss",
        username: "@kristi",
    },
    {
        id: "3",
        name: "Stivi Ndoni",
        title: "employee",
        birthDate: date,
        username: "@stivo"
    }
];

export const timelogs = [
    {
        id: "1",
        authorID: "1",
        log: "Softup",
    },
    {
        id: "2",
        authorID: "1",
        log: "Technologies",
    },
    {
        id: "3",
        authorID: "1",
        log: "<3",
    },
    {
        id: "4",
        authorID: "2",
        log: "Boss of",
    },
    {
        id: "5",
        authorID: "2",
        log: "Softup Technologies",
    },
    {
        id: "6",
        authorID: "2",
        log: "<3",
    },
    {
        id: "7",
        authorID: "3",
        log: "Softup",
    },
    {
        id: "8",
        authorID: "3",
        log: "Technologies",
    },
    {
        id: "9",
        authorID: "3",
        log: "<3",
    }
];