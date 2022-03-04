import React from 'react'
const Goods = React.lazy((_) => import('@/views/main/product/goods'))
export default {
  path: '/main/product/goods',
  name: 'goods',
  component: Goods,
  children: []
}
