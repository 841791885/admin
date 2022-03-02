import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { NavHeaderWrapper, HeaderContent } from './style'

export default function NavHeader({ isCollapsed, toggleCollapsed }) {
  return (
    <NavHeaderWrapper>
      <ToggleIcon toggleCollapsed={toggleCollapsed} isCollapsed={isCollapsed} />
      <HeaderContent>
        <div className="breadcrumb">bread</div>
        <div className="dropdown">dropdown</div>
      </HeaderContent>
    </NavHeaderWrapper>
  )
}

function ToggleIcon({ isCollapsed, toggleCollapsed }) {
  return isCollapsed ? (
    <MenuUnfoldOutlined style={{ fontSize: '24px' }} onClick={toggleCollapsed} />
  ) : (
    <MenuFoldOutlined style={{ fontSize: '24px' }} onClick={toggleCollapsed} />
  )
}
