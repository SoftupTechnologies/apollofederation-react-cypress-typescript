/*
 * Project: app
 * Created Date: Monday May 27th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Login from './Login';
import Timelogs from './Timelogs';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Login} exact={true} />
        <Route path="/timelogs/" component={Timelogs} />
      </header>
    </div>
  )
}

export default App;
