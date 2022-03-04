import React from 'react'
export default {
  path: '/main/system/menu',
  name: 'menu',
  render: React.lazy((_) => import('@/views/main/system/menu')),
  children: []
}
