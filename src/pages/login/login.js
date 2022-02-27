import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { accountLogin } from '@/store/login/actionCreators'
const login = memo(() => {
  const { token } = useSelector(
    (state) => ({
      token: state.login.token
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  return (
    <div
      onClick={() =>
        dispatch(
          accountLogin({
            name: 'codertest',
            password: '123456'
          })
        )
      }
    >
      login{token}
    </div>
  )
})

export default login
