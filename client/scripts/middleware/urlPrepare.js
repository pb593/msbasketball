const API_ROOT = 'http://localhost:8080/v1/';


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