import React from 'react'
const List = React.lazy((_) => import('@/views/main/story/list'))
export default {
  path: '/main/story/list',
  name: 'list',
  component: List,
  children: []
}
