import React from 'react'
const NotFound = React.lazy((_) => import('@/views/not-found'))
export default {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: NotFound,
  children: []
}
