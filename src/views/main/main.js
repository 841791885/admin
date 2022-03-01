import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'

import NavMenu from '@/components/nav-menu/nav-menu'
import NavHeader from '@/components/nav-header/nav-header'
import { MainWrapper } from './style'
const { Header, Sider, Content } = Layout

const Main = memo((props) => {
  const {
    route: { children }
  } = props

  return (
    <MainWrapper>
      <Layout>
        <Sider>
          <NavMenu />
        </Sider>
        <Layout>
          <Header>
            <NavHeader />
          </Header>
          <Content>
            <div className="content">{renderRoutes(children)}</div>
          </Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
})

export default Main
