/*
 * Project: app
 * Created Date: Monday June 10th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import gql from 'graphql-tag';

export const me = gql`
query me($id: Int!) {
  me(id: $id){
    username
    name
    timelogs {
        author
        log
    }
  }
}
`