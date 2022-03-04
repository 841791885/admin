import React from 'react'
export default {
  path: '/main/system/user',
  name: 'user',
  render: React.lazy((_) => import('@/views/main/system/user')),
  children: []
}
