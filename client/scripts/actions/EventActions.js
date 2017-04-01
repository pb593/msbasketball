import { EVENT_LIST } from './ActionTypes';
import { CALL_API } from '../middleware/api';
import * as EventUrls from '../urlEndpoints/Events';

function list () {
    return {
        [CALL_API]: {
            types: [EVENT_LIST],
            endpoint: EventUrls.index,
            method: 'GET'
        }
    }
}

export const listEvents = () => dispatch => (dispatch(list()));
