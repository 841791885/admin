import React from 'react'
const Role = React.lazy((_) => import('@/views/main/system/role'))
export default {
  path: '/main/system/role',
  name: 'role',
  component: Role,
  children: []
}
