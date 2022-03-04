import React from 'react'
export default {
  path: '/main/story/chat',
  name: 'chat',
  render: React.lazy((_) => import('@/views/main/story/chat')),
  children: []
}
