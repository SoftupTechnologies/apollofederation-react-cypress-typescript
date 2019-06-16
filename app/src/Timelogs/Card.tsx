/*
 * Project: app
 * Created Date: Monday June 10th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React from 'react';
import { Card, Callout, Elevation, Icon, Intent } from '@blueprintjs/core';

const TimelogCard: React.FC<{ author: string, log: string, username: string }> = ({
  author,
  log,
  username,
}) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark" key={log + author}>
      <h5 className="bp3-heading">{username}</h5>
      <Callout className="bp3-intent-primary bp3-dark bp3-ui-text">
        {log === '<3'
          ? <Icon icon={'heart'} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} style={{ color: '#C22762' }} />
          : log
        }
      </Callout>
      <p className="bp3-dark bp3-monospace-text bp3-text-small bp3-align-right" style={{ textAlign: 'right' }}>Total: 8h</p>
    </Card>
  )
}
export default TimelogCard;