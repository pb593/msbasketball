import { EVENT_LIST } from './ActionTypes';
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

export const listEvents = () => dispatch => (dispatch(list()));

//fixme: Лежит здесь потому что сюда положили
export const requestEventsTableData = () => dispatch => {
    const promises = [
        dispatch(listEvents()),
        dispatch(listParticipants())
    ];
    return Promise.all(promises);
};