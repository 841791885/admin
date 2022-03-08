import * as actionType from './constants'

const initialState = {
  usersTotalCount: 0,
  usersList: [],
  departmentTotalCount: 0,
  departmentList: []
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
    default:
      return state
  }
}
