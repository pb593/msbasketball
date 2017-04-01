/**
 * Created by eugene on 19.03.16.
 */

const API_ROOT = 'http://37.139.4.124/api/';


// Урлы на сервере, к которым не нужна роль
const RootMethods = [
  'auth'
];

function prepareUrl (endpoint, userData) {
  if (userData) {
    for (let i = 0; i < RootMethods.length; i++) {
      if (endpoint.indexOf(RootMethods[i]) != -1) {
        return API_ROOT + endpoint
      }
    }
    return API_ROOT + userData.role + '/' + endpoint
  }
  return API_ROOT + endpoint
}

export default (endpoint, userData) => {
  return prepareUrl(endpoint, userData).replace(/([^:]\/)\/+/g, "$1");
}