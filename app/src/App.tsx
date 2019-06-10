import React, { Fragment, useState } from 'react';
import { Divider, Spinner, Intent, NumericInput, Position } from "@blueprintjs/core";
import './App.css';
import { Query } from 'react-apollo';
import { me } from './graphql/commonQueries';
import { TimelogCard } from './Card';

interface IState {
  id: number
}

const App: React.FC = () => {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        {
          id > 0 && id < 4 &&
          <NumericInput
            leftIcon="user"
            placeholder="Pick an user..."
            className="bp3-dark"
            large={true}
            selectAllOnFocus
            allowNumericCharactersOnly={true}
            intent={Intent.PRIMARY}
            value={id}
            buttonPosition={Position.LEFT}
            onValueChange={(id: number) => { setId(id) }}
          />
        }
        <Query
          query={me}
          variables={{
            id
          }}
        >
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <Spinner intent={Intent.PRIMARY} />
              }
              if (error) {
                return <h5 className="bp3-heading bp3-dark">Something went wrong.</h5>
              }
              if (data && !data.me) {
                return (
                  <Fragment>
                    <h1 className="bp3-heading bp3-dark">Oops..</h1>
                    <p>Seems like you lost <a href="#" onClick={() => setId(1)}>track</a>...</p>
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
      </header>
    </div>
  )
}

export default App;
