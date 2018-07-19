import {
  LOGIN,
  LOGOUT
} from '../actions/login'

export function login (state = null, action) {
  switch (action.type) {
    case LOGIN: 
      return action.userId
    case LOGOUT:
      return null
    default:
      return state
  }
}
