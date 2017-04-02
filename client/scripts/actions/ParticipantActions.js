import { PARTICIPANT_LIST } from './ActionTypes';
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

export const listParticipants = () => dispatch => (dispatch(list()));
