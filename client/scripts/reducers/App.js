import { combineReducers } from 'redux'
import events from './Events'
import participants from './Participants'

const portalApp = combineReducers({
  events, participants
});

export default portalApp
