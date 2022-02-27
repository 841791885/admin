import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

export default function Main() {
  const { token } = useSelector(
    (state) => ({
      token: state.login.token
    }),
    shallowEqual
  )

  return <div>main{token}</div>
}
