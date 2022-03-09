import { useRef } from 'react'
import { useBoolean } from 'ahooks'

export const usePageMoadl = () => {
  const pageModalRef = useRef()
  const [isModalVisible, { toggle: toggleModalVisible }] = useBoolean(false)

  return [pageModalRef, isModalVisible, toggleModalVisible]
}
