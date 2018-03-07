import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/home/Home.jsx';
import Detail from './components/detail/Detail.jsx';

const Router = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:pid" component={Detail} />
      <Route exact path="/cart" component={Home} />
    </Switch>
  </Layout>
);

export default Router;
