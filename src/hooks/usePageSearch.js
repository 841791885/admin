import { useRef } from 'react'

export const usePageSearch = () => {
  const getPageDataRef = useRef()
  const getSearchFormDataRef = useRef()
  const handleQueryClick = (queryInfo) => {
    console.log(getPageDataRef?.current)
    getPageDataRef?.current(queryInfo)
  }
  const handleResetClick = () => {
    getPageDataRef?.current()
  }

  return { getSearchFormDataRef, getPageDataRef, handleQueryClick, handleResetClick }
}
