import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
const Main = memo((props) => {
  const {
    route: { children }
  } = props
  const History = useHistory()
  const jumplogin = () => {
    History.push({ pathname: '/login' })
  }

  return <div onClick={jumplogin}>child{renderRoutes(children)}</div>
})

export default Main
