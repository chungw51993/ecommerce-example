import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './router.jsx';

import './styles/base.scss';

const wrapper = element => (
  <BrowserRouter>
    { element }
  </BrowserRouter>
);

render(wrapper(<Router />), document.getElementById('app'));
