import React from 'react'
const Login = React.lazy((_) => import('@/views/login'))
export default {
  path: '/login',
  name: 'login',
  component: Login
}
