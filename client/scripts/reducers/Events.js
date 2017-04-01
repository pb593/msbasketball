import {
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAILURE
} from '../actions/ActionTypes'

const initialState = [];

const Events = (state = initialState, action) => {
  switch(action.type) {
    case EVENT_LIST_SUCCESS:
      return [ ...action.json ];
    case EVENT_LIST_FAILURE:
      return [ ...initialState ];
    default:
      return state
  }
};

export default Events
