import React from 'react'
const Menu = React.lazy((_) => import('@/views/main/system/menu'))
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: Menu,
  children: []
}
