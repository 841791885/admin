import React from 'react'
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: React.lazy((_) => import('@/views/main/story/chat')),
  children: []
}
