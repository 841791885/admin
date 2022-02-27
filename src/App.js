import React from 'react'

import { Provider } from 'react-redux'
import store from './store'

// import Main from '@/pages/main/main'
import Login from '@/pages/login/login'

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default App
