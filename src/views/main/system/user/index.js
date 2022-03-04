import React, { memo } from 'react'
import { UserWrapper } from './style'
const User = memo(() => {
  return (
    <UserWrapper>
      <div className="header">header</div>
    </UserWrapper>
  )
})

export default User
