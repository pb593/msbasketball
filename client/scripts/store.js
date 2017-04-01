import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import api from './middleware/api'
import app from './reducers/App'

const log = createLogger();

const store = createStore (
    app,
    applyMiddleware(
        thunk,
        api,
        log
    )
);
export default store
