import React from 'react'
const Overview = React.lazy((_) => import('@/views/main/analysis/overview'))
export default {
  path: '/main/analysis/overview',
  name: 'overview',
  component: Overview,
  children: []
}
