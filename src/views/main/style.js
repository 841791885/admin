import styled from 'styled-components'

export const MainWrapper = styled.div`
  /* height: 100%; */
  height: 100vh;
  .ant-layout {
    height: 100%;
    /* background-color: #ccc; */
    background-color: #f0f2f5;
    &-header {
      background-color: #fff;
      height: 48px;
    }
    &-sider {
      background-color: pink;
    }
    &-content {
      height: calc(100% - 48px);
      background-color: #f0f2f5;
      text-align: center;
      color: #333;
      .content {
        background-color: #fff;
        border-radius: 8px;
        height: 100%;
        width: 100%;
      }
    }
  }
`
