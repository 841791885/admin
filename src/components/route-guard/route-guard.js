import { memo } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDeepCompareEffect } from 'ahooks'
import { Spin } from 'antd'

import localCache from '@/utils/cache'
import { firstRoute } from '@/utils/map-menus'
const RouteGuard = memo((props) => {
  const { loading } = useSelector((state) => {
    return {
      loading: state.common.loading
    }
    // loading: state.common.looading
  })
  console.log(loading)
  const locationInfo = useLocation()
  useDeepCompareEffect(() => {}, [locationInfo])
  if (locationInfo.pathname !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      console.log('login')
      // History.push({ pathname: '/login' })
      return <Redirect to="/login" />
    }
    console.log('firstRoute', firstRoute)
    if (locationInfo.pathname === '/main') {
      console.log('user')
      // History.push({ pathname: '/main/system/user' })
      return <Redirect to={firstRoute.path} />
    }
  }
  return (
    <Spin spinning={loading} size="large" delay={100}>
      {props.children}
    </Spin>
  )
})

export default RouteGuard
