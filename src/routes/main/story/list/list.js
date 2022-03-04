import React from 'react'
export default {
  path: '/main/story/list',
  name: 'list',
  render: React.lazy((_) => import('@/views/main/story/list')),
  children: []
}
