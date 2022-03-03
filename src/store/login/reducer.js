import * as actionTypes from './constants'
import router from '@/routes'
import { menuMapToRoutes } from '@/utils/map-menus'

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
      const routes = menuMapToRoutes(action.userMenus)
      router.children = []
      routes.forEach((route) => {
        router.children.push(route)
      })
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
