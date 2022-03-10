import { useRef } from 'react'

export const usePageSearch = () => {
  //存储表格请求数据方法
  const getPageDataRef = useRef()
  //获取搜索框form对象
  const getSearchFormDataRef = useRef()
  //查询点击
  const handleQueryClick = (queryInfo) => {
    console.log(getPageDataRef?.current)
    getPageDataRef?.current(queryInfo)
  }
  //重置点击
  const handleResetClick = () => {
    getPageDataRef?.current()
  }

  return { getSearchFormDataRef, getPageDataRef, handleQueryClick, handleResetClick }
}
