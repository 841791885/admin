import { useRef } from 'react'

export const usePageSearch = () => {
  const getPageDataRef = useRef()
  const handleQueryClick = (queryInfo) => {
    console.log(getPageDataRef?.current)
    getPageDataRef?.current(queryInfo)
  }
  const handleResetClick = () => {
    getPageDataRef?.current()
  }

  return [getPageDataRef, handleQueryClick, handleResetClick]
}
