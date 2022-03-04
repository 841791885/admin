import React from 'react'
const User = React.lazy((_) => import('@/views/main/system/user'))
export default {
  path: '/main/system/user',
  name: 'user',
  component: User,
  children: []
}
