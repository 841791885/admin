import * as actionTypes from './constants'

import { accountLoginRequest } from '@/service/login/login'

const changeLoginTokenAction = (res) => {
  const {
    data: { id, name, token }
  } = res
  return {
    type: actionTypes.CHANGE_TOKEN,
    token: token
  }
}

export const accountLogin = (loginInfo) => {
  return (dispatch) => {
    accountLoginRequest(loginInfo).then((res) => dispatch(changeLoginTokenAction(res)))
  }
}
