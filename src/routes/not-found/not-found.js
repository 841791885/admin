import React from 'react'
export default {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: React.lazy((_) => import('@/views/not-found/not-found')),
  children: []
}

import React from 'react'