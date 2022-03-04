import React from 'react'
const Chat = React.lazy((_) => import('@/views/main/story/chat'))
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: Chat,
  children: []
}
