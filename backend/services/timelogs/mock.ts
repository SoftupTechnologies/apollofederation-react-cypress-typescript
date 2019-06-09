/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import moment from "moment";

export const usernames = [
    { id: "1", username: "@" },
    { id: "2", username: "@complete" }
];


const date = moment().format('DD/MM/YYYY');
export const users = [
    {
        id: "1",
        name: "Shpetim Selaci",
        birthDate: date,
        username: "employee"
    },
    {
        id: "2",
        name: "Kristi Kristo",
        birthDate: date,
        username: "boss"
    },
    {
        id: "3",
        name: "Stivi Ndoni",
        birthDate: date,
        username: "@complete"
    }
];

export const timelogs = [
    {
        id: "1",
        authorID: "1",
        log: "With love",
    },
    {
        id: "2",
        authorID: "1",
        log: "From",
    },
    {
        id: "3",
        authorID: "2",
        log: "Softup",
    },
    {
        id: "4",
        authorID: "2",
        log: "Technologies",
    },
    {
        id: "4",
        authorID: "3",
        log: "<3",
    }
];