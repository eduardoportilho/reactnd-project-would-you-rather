export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function loginUser (userId) {
  return {
    type: LOGIN,
    userId
  }
}

export function logoutUser () {
  return {
    type: LOGOUT
  }
}
