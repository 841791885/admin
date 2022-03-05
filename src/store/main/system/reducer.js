import * as actionType from './constants'

const initialState = {
  usersTotalCount: 0,
  usersList: []
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
    default:
      return state
  }
}
