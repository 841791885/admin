import React from 'react'
export default {
  path: '/main/system/department',
  name: 'department',
  render: React.lazy((_) => import('@/views/main/system/department')),
  children: []
}
