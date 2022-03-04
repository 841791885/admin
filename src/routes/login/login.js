import React from 'react'

export default {
  path: '/login',
  name: 'login',
  render: React.lazy((_) => import('@/views/login'))
}
