import { PARTICIPANT_LIST, PARTICIPANT_CREATE } from './ActionTypes';
import { CALL_API } from '../middleware/api';
import * as ParticipantUrls from '../urlEndpoints/Participants';

function list () {
    return {
        [CALL_API]: {
            types: [PARTICIPANT_LIST],
            endpoint: ParticipantUrls.index,
            method: 'GET'
        }
    }
}

function create (participant) {
    return {
        [CALL_API]: {
            types: [PARTICIPANT_CREATE],
            endpoint: ParticipantUrls.index,
            method: 'POST',
            data: participant
        }
    }
}

export const listParticipants = () => dispatch => (dispatch(list()));
export const createParticipant = (name, email) => dispatch => (dispatch(create(
    {
        "name": name,
        "email": email
    }
)));
