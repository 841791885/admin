import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Avatar, Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import localCache from '@/utils/cache'

import { NavInfoWrapper } from './style'

export default function NavInfo() {
  const { name } = useSelector((state) => ({ name: state.login.userInfo.name }))

  return (
    <NavInfoWrapper>
      <Dropdown overlay={<Menu1 />}>
        <div className="avatar">
          <Avatar
            size={32}
            icon={<UserOutlined />}
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          />
          <span className="name">{name}</span>
        </div>
      </Dropdown>
    </NavInfoWrapper>
  )
}

function Menu1() {
  const History = useHistory()
  const handleExitClick = (menuInfo) => {
    if (menuInfo.key === 'loginout') {
      console.log('logout')
      localCache.deleteCache('token')
      History.push({ pathname: '/main' })
    }
  }
  return (
    <Menu onClick={handleExitClick}>
      <Menu.Item key="loginout" icon={<UserOutlined />}>
        退出登录
      </Menu.Item>
      <Menu.Item key="info" icon={<UserOutlined />}>
        个人信息
      </Menu.Item>
    </Menu>
  )
}
