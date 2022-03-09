import { useRef } from 'react'
import { useBoolean } from 'ahooks'

export const usePageMoadl = () => {
  const pageModalFormRef = useRef()
  const [isModalVisible, { toggle: toggleModalVisible }] = useBoolean(false)

  return [pageModalFormRef, isModalVisible, toggleModalVisible]
}
