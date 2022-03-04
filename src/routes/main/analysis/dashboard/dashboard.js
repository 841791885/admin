import React from 'react'
const Dashboard = React.lazy((_) => import('@/views/main/analysis/dashboard'))
export default {
  path: '/main/analysis/dashboard',
  name: 'dashboard',
  component: Dashboard,
  children: []
}
