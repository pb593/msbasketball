import { ACTIONS_COUNT } from './ActionTypes'

export default (mainAction) => {
  if (mainAction.length < ACTIONS_COUNT) {
    return [
      mainAction + '_REQUEST',
      mainAction + '_SUCCESS',
      mainAction + '_FAILURE'
    ]
  } else {
    return mainAction
  }
}
