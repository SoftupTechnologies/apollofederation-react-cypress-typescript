/*
 * Project: app
 * Created Date: Saturday June 15th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import gql from 'graphql-tag';

export const addTimelog = gql`
  mutation addTimelog($log: String!, $totalHours: Int! ) {
    addTimelog(log: $log, totalHours: $totalHours) {
      author {
        name
      }
      totalHours
      log
    }
  }
`