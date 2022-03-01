import styled from 'styled-components'

export const NavMenuWrapper = styled.div`
  height: 100%;
  background-color: #001529;
`

export const LogoImg = styled.div.attrs({ className: 'logo' })`
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  box-sizing: content-box;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`
