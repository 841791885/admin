import styled from 'styled-components'
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  /* 加了spin之后用vh才撑满 */
  height: 100vh;
  background-image: url(${require('@/assets/img/login-bg.svg').default});
`
