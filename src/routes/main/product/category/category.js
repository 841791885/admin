import React from 'react'
export default {
  path: '/main/product/category',
  name: 'category',
  render: React.lazy((_) => import('@/views/main/product/category')),
  children: []
}
