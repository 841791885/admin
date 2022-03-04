import React from 'react'
export default {
  path: '/main/system/role',
  name: 'role',
  render: React.lazy((_) => import('@/views/main/system/role')),
  children: []
}
