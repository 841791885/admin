import styled, { createGlobalStyle } from 'styled-components'

export const MainWrapper = styled.div`
  /* height: 100%; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-content,
  .page {
    height: 100%;
  }

  .page-content {
    height: calc(100% - 48px);
    text-align: center;
    color: #333;
    background-color: #f0f2f5;
    .content {
      height: 100%;
      width: 100%;
      border-radius: 8px;
      overflow-y: auto;
    }
  }
  .ant-layout-header {
    background-color: #fff;
    height: 48px;
    color: #333;
    text-align: center;
    align-items: center;
  }
  .ant-layout-sider {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
