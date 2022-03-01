import React, { memo } from 'react'

import { LoginWrapper } from './style'

import LoginPanel from './cpn/login-panel/login-panel'
// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

// import { accountLogin } from '@/store/login/actionCreators'
const Login = memo(() => {
  // const { token } = useSelector(
  //   (state) => ({
  //     token: state.login.token
  //   }),
  //   shallowEqual
  // )
  // const dispatch = useDispatch()
  // const History = useHistory()
  // const jumpmain = () => {
  //   History.push({ pathname: 'main' })
  // }
  return (
    <LoginWrapper>
      <LoginPanel></LoginPanel>
    </LoginWrapper>
  )
})

export default Login
