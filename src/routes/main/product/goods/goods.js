import React from 'react'
export default {
  path: '/main/product/goods',
  name: 'goods',
  component: React.lazy((_) => import('@/views/main/product/goods')),
  children: []
}
