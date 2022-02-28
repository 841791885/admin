import * as actionTypes from './constants'

const initialState = {
  token: '',
  userInfo: {},
  userMenus: {},
  permissions: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOKEN:
      return { ...state, token: action.token }
    case actionTypes.CHANGE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case actionTypes.CHANGE_USER_MENUS:
      return {
        ...state,
        userMenus: action.userMenus
      }
    case actionTypes.CHANGE_PERMISSIONS:
      return {
        ...state,
        permissions: action
      }
    default:
      return state
  }
}

export default reducer
