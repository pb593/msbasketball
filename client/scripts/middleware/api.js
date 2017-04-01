import 'isomorphic-fetch'

import splitActions from '../actions/ActionSplitter';
import urlPrepare from './urlPrepare';


export const CALL_API = Symbol('Call API');

function request (endpoint, method, data) {
  return fetch (endpoint, {
    method: method,
    credentials: 'include',
    headers: Object.assign({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify(data)
  }).then(response => {
    return response.json().then(json => ({ json, response }))
  }).then(({ json, response }) => {

    if (!response.ok) {
      return Promise.reject(json)
    }

    return Object.assign({}, { json })
  })
}

export default store => next => action => {

  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI;
  const { types } = callAPI;
  const { method, data } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length == 0 || types.length > 3) {
    throw new Error('Expected an array of three or less action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith (data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction
  }

  endpoint = urlPrepare(endpoint);

  const [ REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE ] = splitActions(types);

  next(actionWith({ type: REQUEST_TYPE }));

  return request(endpoint, method, data).then(
    response => {
      next(actionWith({
        json: response.json,
        type: SUCCESS_TYPE
      }));

      return response.json;
    },
    error => {
      next(actionWith({
        type: FAILURE_TYPE,
        error: error.message || 'Something bad happened'
      }));

      return error;
    }
  )
}
