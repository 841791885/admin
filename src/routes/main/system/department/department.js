import React from 'react'
const Department = React.lazy((_) => import('@/views/main/system/department'))
export default {
  path: '/main/system/department',
  name: 'department',
  component: Department,
  children: []
}
