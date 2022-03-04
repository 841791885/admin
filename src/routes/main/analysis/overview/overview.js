import React from 'react'
export default {
  path: '/main/analysis/overview',
  name: 'overview',
  render: React.lazy((_) => import('@/views/main/analysis/overview')),
  children: []
}
