import React, { memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd'

import { MailOutlined } from '@ant-design/icons'

import { pathMapToMenu } from '@/utils/map-menus'

import { NavMenuWrapper, LogoImg } from './style'

const { SubMenu } = Menu

const NavMenu = memo(({ isCollapsed }) => {
  const { menus } = useSelector((state) => ({
    menus: state.login.userMenus
  }))

  const Location = useLocation()
  const History = useHistory()

  //获取当前默认对象
  const menu = pathMapToMenu(menus, Location.pathname)
  //点击菜单
  const initOpenKey = useRef([menu.parentId + ''])
  const [initSelectKey, setSelectKey] = useState([menu.id + ''])

  const jumpRoute = (item) => {
    console.log('click ', item)
    setSelectKey([item.id + ''])
    History.push({ pathname: item && item.url })
  }
  //映射菜单
  const mapMenus = (itemX) => {
    if (itemX.children && itemX.children.length) {
      return (
        <SubMenu key={itemX.id} title={itemX.name} icon={<MailOutlined />}>
          {itemX.children.map((itemY) => (
            <Menu.Item
              key={itemY.id}
              onClick={() => {
                jumpRoute(itemY)
              }}
            >
              {itemY.name}
            </Menu.Item>
          ))}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item
          key={itemX.id}
          onClick={(event) => {
            jumpRoute(itemX)
          }}
        >
          {itemX.name}
        </Menu.Item>
      )
    }
  }
  return (
    <NavMenuWrapper>
      <LogoImg>
        <img className="img" src={require('@/assets/img/logo.svg').default} alt="logo" />
        {isCollapsed ? null : <span className="title">起飞了芜湖~~~</span>}
      </LogoImg>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={initOpenKey.current}
        defaultSelectedKeys={initSelectKey}
      >
        {menus.map(mapMenus)}
      </Menu>
    </NavMenuWrapper>
  )
})

export default NavMenu
