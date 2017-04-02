import {
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAILURE
} from '../actions/ActionTypes'

const initialState = [];

const Participants = (state = initialState, action) => {
  switch(action.type) {
    case PARTICIPANT_LIST_SUCCESS:
      return [ ...action.json ];
    case PARTICIPANT_LIST_FAILURE:
      return [ ...initialState ];
    default:
      return state
  }
};

export default Participants
