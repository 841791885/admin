import React from 'react'

export default {
  path: '/main/analysis/dashboard',
  name: 'dashboard',
  render: React.lazy((_) => import('@/views/main/analysis/dashboard')),
  children: []
}
