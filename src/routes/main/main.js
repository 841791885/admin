import React from 'react'
const Main = React.lazy((_) => import('@/views/main'))
export default {
  path: '/main',
  name: 'main',
  component: Main,
  children: []
}
