import React from 'react'
const Category = React.lazy((_) => import('@/views/main/product/category'))
export default {
  path: '/main/product/category',
  name: 'category',
  component: Category,
  children: []
}
