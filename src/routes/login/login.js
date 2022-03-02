import React from 'react'

export default {
  path: '/login',
  name: 'login',
  component: React.lazy((_) => import('@/views/login'))
}
