import * as actionTypes from './constants'

const initialState = {
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOADING:
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

export default reducer
