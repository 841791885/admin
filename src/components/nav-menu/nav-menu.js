import React, { memo, useState } from 'react'
import { Menu } from 'antd'
import { NavMenuWrapper, LogoImg } from './style'
import { useSelector } from 'react-redux'

const { SubMenu } = Menu

const NavMenu = memo(() => {
  const { menus } = useSelector((state) => ({
    menus: state.login.userMenus
  }))

  //缩菜单栏
  const [collapsed, setCollapsed] = useState(true)
  console.log(menus)

  //点击菜单
  const handleClick = (e) => {
    console.log('click ', e)
  }
  //映射菜单
  const mapMenus = (itemX) => {
    if (itemX.children && itemX.children.length) {
      return (
        <SubMenu key={itemX.id} title={itemX.name}>
          {itemX.children.map((itemY) => (
            <Menu.Item key={itemY.id}>{itemY.name}</Menu.Item>
          ))}
        </SubMenu>
      )
    } else {
      return <Menu.Item key={itemX.id}>{itemX.name}</Menu.Item>
    }
  }
  return (
    <NavMenuWrapper>
      <LogoImg>
        <img
          className="img"
          onClick={() => {
            console.log(collapsed.toString())
            setCollapsed((a) => !a)
          }}
          src={require('@/assets/img/logo.svg').default}
          alt="logo"
        />
        <span className="title">起飞了芜湖~~~</span>
      </LogoImg>
      <Menu
        theme="dark"
        mode="inline"
        // defaultOpenKeys={['sub1']}
        // defaultSelectedKeys={['1']}
        style={{ width: 200 }}
        inlineCollapsed={collapsed}
      >
        {menus.map(mapMenus)}
      </Menu>
    </NavMenuWrapper>
  )
})

export default NavMenu
