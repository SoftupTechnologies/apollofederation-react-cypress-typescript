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
            <Callout className="bp3-intent-primary">
                <h5 className="bp3-heading">{username}</h5>
                {log === '<3'
                    ? <Icon icon={'heart'} iconSize={Icon.SIZE_LARGE} intent={Intent.NONE} style={{ color: '#C22762' }} />
                    : log
                }
            </Callout>
        </Card>
    )
}
export default TimelogCard;