import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { pathMapBreadcrumbs } from '@/utils/map-menus'

import NavInfo from './cpn/nav-info/nav-info'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

import { NavHeaderWrapper, HeaderContent } from './style'
export default function NavHeader({ isCollapsed, toggleCollapsed }) {
  const Location = useLocation()
  const { userMenus } = useSelector((state) => ({ userMenus: state.login.userMenus }))
  const breadcrumbArr = pathMapBreadcrumbs(userMenus, Location.pathname)

  return (
    <NavHeaderWrapper>
      <ToggleIcon toggleCollapsed={toggleCollapsed} isCollapsed={isCollapsed} />
      <HeaderContent>
        <Breadcrumbs breadcrumbArr={breadcrumbArr} />
        <NavInfo />
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
