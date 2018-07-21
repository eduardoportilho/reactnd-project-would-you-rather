import { combineReducers } from 'redux'
import {
  USERS_FETCHED,
  ERROR_FETCHING_USERS,
  LOGIN,
  LOGOUT,
} from '../actions'

function userInfo(
  state = {
    isUsersFetched: false,
    isErrorFetchingUsers: false,
    errorFetchingUsers: undefined,
    users: {}
  },
  action
) {
  switch (action.type) {
    case ERROR_FETCHING_USERS:
      return Object.assign({}, state, {
        isUsersFetched: false,
        isErrorFetchingUsers: true,
        errorFetchingUsers: action.error,
        users: {}
      })
    case USERS_FETCHED:
      return Object.assign({}, state, {
        isUsersFetched: true,
        isErrorFetchingUsers: false,
        errorFetchingUsers: undefined,
        users: action.users,
      })
    default:
      return state
  }
}

function login(
  state = {
    loggedUser: undefined,
  },
  action
) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        loggedUser: action.user,
      })
    case LOGOUT:
      return Object.assign({}, state, {
        loggedUser: undefined,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userInfo,
  login,
})

export default rootReducer
