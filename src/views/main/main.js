import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'

import { MainWrapper } from './style'
const { Header, Sider, Content } = Layout

const Main = memo((props) => {
  const {
    route: { children }
  } = props
  const jumplogin = () => {}

  return (
    <MainWrapper onClick={jumplogin}>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{renderRoutes(children)}</Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
})

export default Main
