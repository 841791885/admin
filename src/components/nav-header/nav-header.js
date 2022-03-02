import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { NavHeaderWrapper } from './style'

export default function NavHeader({ isCollapsed, toggleCollapsed }) {
  return (
    <NavHeaderWrapper>
      <ToggleIcon toggleCollapsed={toggleCollapsed} isCollapsed={isCollapsed} />
    </NavHeaderWrapper>
  )
}

function ToggleIcon({ isCollapsed, toggleCollapsed }) {
  return isCollapsed ? (
    <MenuUnfoldOutlined onClick={toggleCollapsed} />
  ) : (
    <MenuFoldOutlined onClick={toggleCollapsed} />
  )
}
