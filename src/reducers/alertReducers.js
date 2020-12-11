import { POP_ALERT, REMOVE_ALERT } from '../constants/alertConstants'

export const alertReducer = (state = null, action) => {
  switch (action.type) {
    case POP_ALERT:
      return action.payload
    case REMOVE_ALERT:
      return null
    default:
      return state
  }
}