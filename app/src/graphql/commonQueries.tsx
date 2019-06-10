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