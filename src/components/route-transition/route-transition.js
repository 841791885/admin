import React from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { createGlobalStyle } from 'styled-components'
export default function RouteTransition({ children }) {
  const Location = useLocation()
  console.log('Location', Location)
  return (
    <>
      <Globalcss />
      <SwitchTransition mode="out-in">
        <CSSTransition classNames="fade" timeout={500} key={Location.key}>
          {children}
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

const Globalcss = createGlobalStyle`
/* 入场动画开始 */
.fade-enter {
    transform: translateX(100%);
}

/*入场动画过程*/
.fade-enter-active{
    transform: translateX(0);
    transition: transform 0.5s ease;
}

/*入场动画结束*/
/* .fade-enter-done {
    transform: translateX(0);
} */

/*离场动画开始*/
.fade-exit {
    transform: translateX(0);
}

/*离场动画过程*/
.fade-exit-active {
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

/*离场动画结束*/
.fade-exit-done {
    transform: translateX(-100%);
}


`
