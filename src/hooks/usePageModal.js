import { useRef } from 'react'
import { useBoolean, useToggle } from 'ahooks'

export const usePageModal = () => {
  const pageModalFormRef = useRef()
  const [isModalVisible, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)

  console.log(closeModal, 'closeModal')
  console.log(openModal, 'openModal')
  const [formDataSubmitMode, { set }] = useToggle('add')

  const changeFormDataSubmitMode = (mode, formData = null) => {
    if (mode === 'edit') {
      openModal()
      console.log('编辑点击')
      pageModalFormRef?.current.setFieldsValue(formData)
      set(mode)
    } else {
      openModal()
      console.log('添加点击')
      set(mode)
    }
  }

  console.log('我明明是函数changeFormDataSubmitMode', changeFormDataSubmitMode)
  return {
    pageModalFormRef,
    isModalVisible,
    openModal,
    closeModal,
    formDataSubmitMode,
    changeFormDataSubmitMode
  }
}
