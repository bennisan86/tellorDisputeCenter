import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home';
import Disputes from './views/disputes/Disputes';
import Mining from 'views/mining/Mining';
import V25 from 'views/v25/v25'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tellorUpgrade" exact component={V25} />
    <Route path="/disputes" exact component={Disputes} />
    <Route path="/mining" exact component={Mining} />
    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
