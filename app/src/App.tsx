/*
 * Project: app
 * Created Date: Monday May 27th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import React, { Fragment, useState } from 'react';
import './App.css';
import { Route } from 'react-router';
import Login from './Login';
import Timelogs from './Timelogs';

const App: React.FC = () => {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/login" component={Login} />
        <Route path="/timelogs" component={Timelogs} />
      </header>
    </div>
  )
}

export default App;
