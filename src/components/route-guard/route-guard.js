import { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDeepCompareEffect } from 'ahooks'
import { Spin } from 'antd'
import localCache from '@/utils/cache'

const RouteGuard = memo((props) => {
  const { loading } = useSelector((state) => {
    return {
      loading: state.common.loading
    }
    // loading: state.common.looading
  })
  console.log(loading)
  const History = useHistory()
  const locationInfo = useLocation()
  useDeepCompareEffect(() => {}, [locationInfo])
  if (locationInfo.pathname !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      console.log('login')
      History.push({ pathname: '/login' })
    }
    if (locationInfo.pathname === '/main') {
      console.log('user')
      History.push({ pathname: '/main/system/user' })
    }
  }
  return (
    <Spin spinning={loading} size="large" delay={100}>
      {props.children}
    </Spin>
  )
})

export default RouteGuard
