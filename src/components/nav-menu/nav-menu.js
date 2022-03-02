import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { NavMenuWrapper, LogoImg } from './style'

const { SubMenu } = Menu

const NavMenu = memo(({ isCollapsed }) => {
  const { menus } = useSelector((state) => ({
    menus: state.login.userMenus
  }))

  //点击菜单
  const handleClick = (e) => {
    console.log('click ', e)
  }
  //映射菜单
  const mapMenus = (itemX) => {
    if (itemX.children && itemX.children.length) {
      return (
        <SubMenu key={itemX.id} title={itemX.name} icon={<MailOutlined />}>
          {itemX.children.map((itemY) => (
            <Menu.Item key={itemY.id} onClick={handleClick}>
              {itemY.name}
            </Menu.Item>
          ))}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={itemX.id} onClick={handleClick}>
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
        style={{ width: 200 }}
      >
        {menus.map(mapMenus)}
      </Menu>
    </NavMenuWrapper>
  )
})

export default NavMenu
