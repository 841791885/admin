import * as actionTypes from './constants'
import router from '@/routes'

const initialState = {
  token: '',
  userInfo: {},
  userMenus: {},
  permissions: [],
  router
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
    case actionTypes.CHANGE_ROUTER:
      return {
        ...state,
        router: action.router
      }
    default:
      return state
  }
}

export default reducer
