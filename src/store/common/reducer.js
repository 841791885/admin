import * as actionTypes from './constants'

const initialState = {
  loading: false,
  entireRoles: [],
  entireDepartments: [],
  entireMenus: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOADING:
      return { ...state, loading: action.loading }
    case actionTypes.CHANGE_ENTIRE_ROLES:
      console.log('action.entireRoles', action.entireRoles)
      return {
        ...state,
        entireRoles: action.entireRoles
      }
    case actionTypes.CHANGE_ENTIRE_DEPARTMENTS:
      console.log('action.entireDepartments', action.entireDepartments)
      return {
        ...state,
        entireDepartments: action.entireDepartments
      }
    case actionTypes.CHANGE_ENTIRE_MENUS:
      console.log(' action.entireMenus', action.entireMenus)
      return {
        ...state,
        entireMenus: action.entireMenus
      }
    default:
      return state
  }
}

export default reducer
