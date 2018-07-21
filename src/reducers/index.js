import { combineReducers } from 'redux'
import {
  USERS_FETCHED,
  ERROR_FETCHING_USERS
} from '../actions'

function users(
  state = {
    isUsersFetched: false,
    isErrorFetchingUsers: false,
    errorFetchingUsers: undefined,
    userList: []
  },
  action
) {
  switch (action.type) {
    case ERROR_FETCHING_USERS:
      return Object.assign({}, state, {
        isUsersFetched: false,
        isErrorFetchingUsers: true,
        errorFetchingUsers: action.error,
        userList: []
      })
    case USERS_FETCHED:
      return Object.assign({}, state, {
        isUsersFetched: true,
        isErrorFetchingUsers: false,
        errorFetchingUsers: undefined,
        userList: Object.values(action.users)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users
})

export default rootReducer
