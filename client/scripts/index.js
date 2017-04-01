import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from './store'
import routes from './routes/index'


const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
};

render (
  <Provider store={store}>
      <App history={history} />
  </Provider>,
  document.getElementById('root')
);
