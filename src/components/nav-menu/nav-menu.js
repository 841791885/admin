import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { NavMenuWrapper, LogoImg } from './style'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu

const NavMenu = memo(({ isCollapsed }) => {
  const { menus } = useSelector((state) => ({
    menus: state.login.userMenus
  }))

  const History = useHistory()

  //点击菜单
  const jumpRoute = (item, event) => {
    console.log('click ', item)
    console.log(event)
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
              onClick={(event) => {
                jumpRoute(itemY, event)
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
            jumpRoute(itemX, event)
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
        // defaultOpenKeys={['sub1']}
        // defaultSelectedKeys={['1']}
      >
        {menus.map(mapMenus)}
      </Menu>
    </NavMenuWrapper>
  )
})

export default NavMenu
