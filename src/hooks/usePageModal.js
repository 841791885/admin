import { useRef } from 'react'
import { useBoolean, useToggle } from 'ahooks'

export const usePageModal = (modalConfig) => {
  //弹框表单ref
  const pageModalFormRef = useRef()

  const [isModalVisible, { setFalse: closeModal, setTrue: openModal }] = useBoolean(false)
  //表单提交模式
  const [formDataSubmitMode, { set }] = useToggle('add')

  //打开并初始化表单
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

  return {
    pageModalFormRef,
    isModalVisible,
    openModal,
    closeModal,
    formDataSubmitMode,
    changeFormDataSubmitMode
  }
}
