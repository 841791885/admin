import * as actionType from './constants'

const initialState = {
  usersTotalCount: 0,
  usersList: [],
  departmentTotalCount: 0,
  departmentList: [],
  roleTotalCount: 0,
  roleList: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANG_USERS_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.usersTotalCount
      }
    case actionType.CHANG_USERS_LIST: {
      return {
        ...state,
        usersList: action.usersList
      }
    }
    case actionType.CHANG_DEPARTMENT_TOTAL_COUNT:
      return {
        ...state,
        departmentTotalCount: action.departmentTotalCount
      }
    case actionType.CHANG_DEPARTMENT_LIST: {
      return {
        ...state,
        departmentList: action.departmentList
      }
    }
    case actionType.CHANG_ROLE_TOTAL_COUNT:
      return {
        ...state,
        roleTotalCount: action.roleTotalCount
      }
    case actionType.CHANG_ROLE_LIST: {
      return {
        ...state,
        roleList: action.roleList
      }
    }
    default:
      return state
  }
}
