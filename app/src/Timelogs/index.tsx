/*
 * Project: app
 * Created Date: Monday May 27th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React, { Fragment, useState } from 'react';
import { Divider, Spinner, Intent, Button, Classes } from "@blueprintjs/core";
import { Query } from 'react-apollo';
import { me } from '../graphql/commonQueries';
import TimelogCard from './Card';
import Add from './Add';

const Timelogs: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Query
        query={me}
      >
        {
          ({ loading, error, data }) => {
            if (loading) {
              return <Spinner intent={Intent.PRIMARY} />
            }
            if (error) {
              return <h5 className={`${Classes.HEADING} ${Classes.DARK}`}>Something went wrong.</h5>
            }
            if (!data) {
              return (
                <Fragment>
                  <h1 className={`${Classes.HEADING} ${Classes.DARK}`}>There's no data...</h1>
                </Fragment>
              )
            }
            if (data && !data.me) {
              return (
                <Fragment>
                  <h1 className={`${Classes.HEADING} ${Classes.DARK}`}>Oops..</h1>
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
                  <div className="author">
                    <Add open={open} setOpen={setOpen} />
                    <Button
                      intent={Intent.SUCCESS}
                      icon="plus"
                      className={`${Classes.DARK}`}
                      minimal
                      onClick={(e) => { e.preventDefault(); setOpen(true); }}
                    />
                    <h1 className={`${Classes.HEADING} ${Classes.DARK}`} style={{ display: 'inline' }}>{name} <span className={`${Classes.MONOSPACE_TEXT} ${Classes.RUNNING_TEXT}`}>{title}</span></h1>
                  </div>
                  <Divider style={{ backgroundColor: '#1F4B99', width: "100%", maxWidth: "500px" }} />
                  {
                    timelogs.map(({ author, log, totalHours }) => {
                      return (
                        <TimelogCard author={author.name} log={log} username={username} totalHours={totalHours} key={author.name + log} />
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
