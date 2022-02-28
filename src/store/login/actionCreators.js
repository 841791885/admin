import { useHistory } from 'react-router-dom'

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

export const accountLogin = (loginInfo, History) => {
  return (dispatch) => {
    accountLoginRequest(loginInfo).then((res) => {
      dispatch(changeLoginTokenAction(res))
      History.push('/main')
      //想在这里写一个history.push()  然后不能用usehistory()
      //是使用react - router - config库的路由  老师请问一下有什么方法也可以拿到这个history对象吗
    })
  }
}
