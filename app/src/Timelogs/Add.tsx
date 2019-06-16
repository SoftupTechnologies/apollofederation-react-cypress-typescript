/*
 * Project: app
 * Created Date: Saturday June 15th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React, { useState, Dispatch, SetStateAction } from 'react';
import { Classes, Dialog, TextArea, Button, Intent, InputGroup, FormGroup } from '@blueprintjs/core';
import { Mutation } from 'react-apollo';
import { addTimelog } from '../graphql/commonMutations';
import toast from '../Toast';
import { me } from '../graphql/commonQueries';


const Add: React.FC<{ open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ open, setOpen }) => {
  const [log, setLog] = useState('');
  const [totalHours, setTotalHours] = useState('');

  return (
    <Mutation
      mutation={addTimelog}
      variables={{ log }}
      update={(cache, { data }) => {
        let userData = cache.readQuery({
          query: me
        });
        const timelogs = [...userData.me.timelogs];
        if (data.addTimelog) {
          timelogs.push(data.addTimelog);
        }
        const writeData = {
          me: {
            ...userData.me,
            timelogs
          }
        };
        cache.writeQuery({
          query: me,
          data: writeData,
        })
      }}
      onCompleted={(data) => {
        toast.show({ intent: Intent.SUCCESS, message: 'Successfully added a timelog!' })
        setOpen(false);
      }}
    >
      {(addTimelog, { loading, error }) => {
        if (error) {
          return (
            <Dialog onClose={() => setOpen(false)}>
              Oops something went wrong...
            </Dialog>
          );
        }
        return (
          <Dialog
            title="Add log" className="bp3-dark"
            isOpen={open}
            lazy
            onClose={() => setOpen(false)}
            onClosing={() => {
              setLog('');
              setTotalHours('');
            }}
          >
            <div className={Classes.DIALOG_BODY}>

              <FormGroup
                label="Total Hours"
                labelFor="text-input"
                intent={Intent.PRIMARY}
                inline
              >
                <InputGroup type="number" value={totalHours} onChange={e => setTotalHours(e.target.value)} />
              </FormGroup>
              <TextArea fill value={log} placeholder="add your timelog..." onChange={e => setLog(e.target.value)} minLength={0} />
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Button
                  className={Classes.DARK}
                  onClick={(e) => { e.preventDefault(); addTimelog({ variables: { log, totalHours: parseInt(totalHours, 10) } }) }}
                  loading={loading}
                >
                  Add
                </Button>
              </div>
            </div>
          </Dialog>
        )
      }}
    </Mutation>
  );
}
export default Add;