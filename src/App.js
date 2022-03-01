import React, { Suspense } from 'react'

import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import RouteGuard from './components/route-guard/route-guard'
import store from './store'
import routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <RouteGuard>{renderRoutes(routes)}</RouteGuard>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
