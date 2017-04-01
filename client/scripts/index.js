import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Routers from './routes/index'

render (
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
