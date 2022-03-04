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
  })
  const locationInfo = useLocation()
  useDeepCompareEffect(() => {}, [locationInfo])
  if (locationInfo.pathname !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return <Redirect to="/login" />
    }
    if (locationInfo.pathname === '/main') {
      console.log('user')
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
