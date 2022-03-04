import React, { memo, useEffect, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { useBoolean } from 'ahooks'
import { Layout } from 'antd'

import NavMenu from '@/components/nav-menu/nav-menu'
import NavHeader from '@/components/nav-header/nav-header'
import { MainWrapper } from './style'
const { Header, Sider, Content } = Layout

const Main = memo((props) => {
  const {
    route: { children }
  } = props

  const [isCollapsed, { toggle: toggleCollapsed }] = useBoolean(false)

  return (
    <MainWrapper>
      <Layout className="main-content">
        <Sider collapsed={isCollapsed}>
          <NavMenu isCollapsed={isCollapsed} />
        </Sider>
        <Layout className="page">
          <Header>
            <NavHeader toggleCollapsed={toggleCollapsed} isCollapsed={isCollapsed} />
          </Header>
          <Content className="page-content">
            <div className="content" key={children.path}>
              <Suspense fallback={<div>loading</div>}>{renderRoutes(children)}</Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
})

export default Main
