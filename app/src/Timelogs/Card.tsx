/*
 * Project: app
 * Created Date: Monday June 10th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React from 'react';
import { Card, Callout, Elevation, Icon, Intent, Classes } from '@blueprintjs/core';

const TimelogCard: React.FC<{ author: string, log: string, username: string, totalHours: number }> = ({
  author,
  log,
  username,
  totalHours,
}) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark" key={log + author}>
      <h5 className={`${Classes.HEADING}`}>{username}</h5>
      <Callout className={`${Classes.INTENT_PRIMARY} ${Classes.DARK} ${Classes.UI_TEXT}`}>
        {log === '<3'
          ? <Icon icon={'heart'} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} style={{ color: '#C22762' }} />
          : log
        }
      </Callout>
      <p
        className={`${Classes.INTENT_PRIMARY} ${Classes.MONOSPACE_TEXT} ${Classes.TEXT_SMALL}`}
        style={{ textAlign: 'right' }}
      >
        Total: {totalHours}h
      </p>
    </Card>
  )
}
export default TimelogCard;