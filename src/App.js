import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { useSelector } from 'react-redux'

import RouteGuard from './components/route-guard/route-guard'
function App() {
  const { router } = useSelector((state) => ({
    router: state.login.router
  }))
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <RouteGuard>{renderRoutes(router)}</RouteGuard>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
