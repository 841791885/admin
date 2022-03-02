import React from 'react'
import { Redirect } from 'react-router-dom'

const router = [
  { path: '/', exact: true, render: () => <Redirect to="/main" /> },
  // { path: '/login', component: Login },
  { path: '/login', component: React.lazy((_) => import('@/views/login')) },
  {
    path: '/main',
    component: React.lazy((_) => import('@/views/main'))
    // children: [
    // {
    //   path: '/main',
    //   exact: true
    //   // render: () => <Redirect to="/main/system/user" />
    // }
    // {
    //   path: '/main/system/user',
    //   component: User
    // }
    // ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: React.lazy((_) => import('@/views/not-found'))
  }
]

export default router
