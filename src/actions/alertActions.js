import { POP_ALERT, REMOVE_ALERT } from '../constants/alertConstants'

export const popAlert = (msg, type) => (dispatch) => {
  dispatch({ type: POP_ALERT, payload: { msg, type }})

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
}

export const removeAlert = () => (dispatch) => {
  dispatch({ type: REMOVE_ALERT })
}