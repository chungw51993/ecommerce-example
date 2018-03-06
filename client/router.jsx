import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';

const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);

export default Router;
