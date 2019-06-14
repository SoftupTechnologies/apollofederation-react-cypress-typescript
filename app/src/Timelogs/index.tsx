/*
 * Project: app
 * Created Date: Monday May 27th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React, { Fragment } from 'react';
import { Divider, Spinner, Intent } from "@blueprintjs/core";
import { Query } from 'react-apollo';
import { me } from '../graphql/commonQueries';
import TimelogCard from './Card';

const Timelogs: React.FC = () => {
  return (
    <Fragment>
        <Query
          query={me}
          variables={{ id: localStorage.getItem('id') && parseInt(localStorage.getItem('id') || '', 10) }}
        >
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <Spinner intent={Intent.PRIMARY} />
              }
              if (error) {
                return <h5 className="bp3-heading bp3-dark">Something went wrong.</h5>
              }
              if (!data) {
                return (
                  <Fragment>
                    <h1 className="bp3-heading bp3-dark">There's no data...</h1>
                  </Fragment>
                )
              }
              if (data && !data.me) {
                return (
                  <Fragment>
                    <h1 className="bp3-heading bp3-dark">Oops..</h1>
                    {/* <p>Seems like you lost <a href="#" onClick={() => setId(1)}>track</a>...</p> */}
                  </Fragment>
                )
              }
              const {
                me: {
                  name,
                  username,
                  title,
                  timelogs,
                }
              } = data;

              if (me) {
                return (
                  <Fragment>
                    <h1 className="bp3-heading bp3-dark">{name} </h1>
                    <p className="bp3-monospace-text bp3-running-text">{title}</p>
                    <Divider style={{ backgroundColor: '#1F4B99', width: "100%", maxWidth: "500px" }} />
                    {
                      timelogs.map(({ author, log }) => {
                        return (
                          <TimelogCard author={author} log={log} username={username} key={author + log} />
                        )
                      })
                    }
                  </Fragment>
                )
              }
            }
          }
        </Query>
    </Fragment>
  )
}

export default Timelogs;
