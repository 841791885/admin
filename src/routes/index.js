import React from 'react'
import { Redirect } from 'react-router-dom'

const Login = React.lazy((_) => import('@/views/login/login'))
const Main = React.lazy((_) => import('@/views/main/main'))
const User = React.lazy((_) => import('@/views/main/system/user/user'))

const router = [
  { path: '/', exact: true, render: () => <Redirect to="/main" /> },
  { path: '/login', component: Login },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/main',
        exact: true,
        render: () => <Redirect to="/main/system/user" />
      },
      {
        path: '/main/system/user',
        component: User
      }
    ]
  }
]

export default router
