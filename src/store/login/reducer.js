import * as actionTypes from './constants'

const initialState = {
  token: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOKEN:
      return { ...state, token: action.token }
    default:
      return state
  }
}

export default reducer
