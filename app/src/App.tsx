/*
 * Project: app
 * Created Date: Monday May 27th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React from 'react';
import './App.css';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import Login from './Login';
import Timelogs from './Timelogs';

const App: React.FC<RouteComponentProps> = (props) => {
  const { location: { pathname } } = props;
  const shouldBeCentered = pathname === '/' ? 'center' : ''
  return (
    <div className={`App ${shouldBeCentered}`}>
      <header className={`App-header ${shouldBeCentered}`}>
        <Route path="/" component={Login} exact={true} />
        <Route path="/timelogs/" component={Timelogs} />
      </header>
    </div>
  )
}

export default withRouter(App);
