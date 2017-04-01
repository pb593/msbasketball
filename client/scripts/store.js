import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import api from './middleware/api'
import app from './reducers/App'


export const history = createBrowserHistory();
const log = createLogger();

export const store = createStore (
    connectRouter(history)(app),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
            api,
            log
        )
    )
);
