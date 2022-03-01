import React, { memo } from 'react'

import { NavMenuWrapper, LogoImg } from './style'

const NavMenu = memo(() => {
  return (
    <NavMenuWrapper>
      <LogoImg>
        <img className="img" src={require('@/assets/img/logo.svg').default} alt="logo" />
        <span className="title">起飞了芜湖~~~</span>
      </LogoImg>
    </NavMenuWrapper>
  )
})

export default NavMenu
