import React from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
export default function RouteTransition({ children }) {
  const Location = useLocation()
  console.log('Location', Location)

  return (
    <Globalcss>
      <TransitionGroup>
        <SwitchTransition>
          <CSSTransition
            classNames="fade"
            timeout={300}
            unmountOnExit={true}
            key={Location.pathname}
          >
            {children}
          </CSSTransition>
        </SwitchTransition>
      </TransitionGroup>
    </Globalcss>
  )
}

const Globalcss = styled.div`
  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`
