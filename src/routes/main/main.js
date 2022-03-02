import React from 'react'

export default {
  path: '/main',
  name: 'main',
  component: React.lazy((_) => import('@/views/main')),
  children: []
}

import React from 'react'
