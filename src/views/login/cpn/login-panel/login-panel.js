import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Tabs, Button, Checkbox } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'

import LoginAccount from '../login-account/login-account'
import LoginPhone from '../login-phone/login-phone'

import { accountLogin } from '@/store/login/actionCreators'
import { LoginPanelWrapper } from './style'

export default function LoginPanel() {
  const { TabPane } = Tabs

  const [name, setName] = useState('account')
  const loginAccountRef = useRef()

  const dispath = useDispatch()
  const History = useHistory()

  //登录函数
  const loginAction = () => {
    if (name === 'account') {
      loginAccountRef.current.validateFields().then((formData) => {
        console.log('123123', formData)
        dispath(accountLogin(formData, History))
        console.log(formData)
      })
    } else {
      console.log('verify')
    }
  }
  return (
    <LoginPanelWrapper>
      <h1 className="login-title">后台管理系统</h1>
      <Tabs
        defaultActiveKey={name}
        size="large"
        centered
        onChange={(name) => {
          setName(name)
        }}
      >
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              账号登录
            </span>
          }
          key="account"
        >
          <LoginAccount ref={loginAccountRef} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              手机登录
            </span>
          }
          key="verify"
        >
          <LoginPhone />
        </TabPane>
      </Tabs>
      <div className="control-account">
        <Checkbox v-model="isKeep">记住密码</Checkbox>
        <a href="javascript#" type="primary" style={{ color: '#1890ff' }}>
          忘记密码
        </a>
      </div>
      <Button type="primary" className="login-btn" onClick={loginAction}>
        登录
      </Button>
    </LoginPanelWrapper>
  )
}
