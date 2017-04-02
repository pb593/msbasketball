import { EVENT_LIST, EVENT_CREATE } from './ActionTypes';
import { CALL_API } from '../middleware/api';
import * as EventUrls from '../urlEndpoints/Events';
import { listParticipants } from './ParticipantActions';

function list () {
    return {
        [CALL_API]: {
            types: [EVENT_LIST],
            endpoint: EventUrls.index,
            method: 'GET'
        }
    }
}

function create (event) {
    return {
        [CALL_API]: {
            types: [EVENT_CREATE],
            endpoint: EventUrls.index,
            method: 'POST',
            data: event
        }
    }
}

export const listEvents = () => dispatch => (dispatch(list()));

//fixme: Лежит здесь потому что сюда положили
export const requestEventsTableData = () => dispatch => {
    const promises = [
        dispatch(listEvents()),
        dispatch(listParticipants())
    ];
    return Promise.all(promises);
};

//fixme: fullPrice is a temporary solution
export const createEvent = (dateTime) => dispatch => (dispatch(create(
    {
        "dateTime": dateTime,
        "fullPrice": 100
    }
)));