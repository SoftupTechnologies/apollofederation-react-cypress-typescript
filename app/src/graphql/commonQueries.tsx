/*
 * Project: app
 * Created Date: Monday June 10th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import gql from 'graphql-tag';

export const me = gql`
  query me {
    me {
      username
      name
      title
      timelogs {
        author {
          name
        }
        totalHours
        log
      }
    }
  }
`