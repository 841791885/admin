import { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { useDeepCompareEffect } from 'ahooks'

const RouteGuard = memo((props) => {
  const historyInfo = useHistory()
  console.log(historyInfo)
  const locationInfo = useLocation()
  useDeepCompareEffect(() => {
    console.log('locationInfo', locationInfo)
  }, [locationInfo])
  return props.children
})

export default RouteGuard
