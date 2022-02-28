import { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Spin } from 'antd'
import { useDeepCompareEffect } from 'ahooks'
import { useSelector } from 'react-redux'
const RouteGuard = memo((props) => {
  const { loading } = useSelector((state) => {
    return {
      loading: state.common.loading
    }
    // loading: state.common.looading
  })
  console.log(loading)
  const historyInfo = useHistory()
  console.log(historyInfo)
  const locationInfo = useLocation()
  useDeepCompareEffect(() => {
    console.log('locationInfo', locationInfo)
  }, [locationInfo])

  return <Spin spinning={loading}>{props.children}</Spin>
})

export default RouteGuard
