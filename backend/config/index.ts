/*
 * Project: backend
 * Created Date: Thursday June 13th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import env from "./env";

 export default {
    auth: {
        jwt: {
            secret: env.parsed.JWT_SECRET,
            expirationInSeconds: 86400,
        },
    },
    graphql: {
        path: '/gql',
        playgroundEndpoint: '/ui',
        playground: true,
        introspection: true,
    },
    path: '/',
    port: 4000,
 }