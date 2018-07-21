import { _getUsers } from '../utils/_DATA.js'

export const USERS_FETCHED = 'USERS_FETCHED'
function usersFetched(users) {
  return {
    type: USERS_FETCHED,
    users,
  }
}

export const ERROR_FETCHING_USERS = 'ERROR_FETCHING_USERS'
function errorFetchingUsers(error) {
  return {
    type: ERROR_FETCHING_USERS,
    error,
  }
}

export const fetchUsers = () => dispatch => {
  _getUsers()
    .then(users => dispatch(usersFetched(users)))
    .catch(error => dispatch(errorFetchingUsers(error)))
}

export const LOGIN = 'LOGIN'
export function login(user) {
  return {
    type: LOGIN,
    user,
  }
}

export const LOGOUT = 'LOGOUT'
export function logout() {
  return {
    type: LOGOUT,
  }
}
