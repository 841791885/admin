import React from 'react'

export default {
  path: '/main',
  name: 'main',
  render: React.lazy((_) => import('@/views/main')),
  children: []
}
