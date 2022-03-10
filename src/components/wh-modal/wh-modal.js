import React, { forwardRef, useMemo } from 'react'
import { Modal } from 'antd'

import WHForm from '@/components/wh-form/wh-form'

import { WHModalWrapper } from './style'
import { useSelector } from 'react-redux'
function WHModal(props) {
  const { isModalVisible, pageModalRef, formDataSubmitMode, closeModal, formItems, ...rest } = props
  const { entireRoles, entireDepartments } = useSelector((state) => ({
    entireRoles: state.common.entireRoles,
    entireDepartments: state.common.entireDepartments
  }))

  //修改渲染的表单 给select增加部门和用户增加option
  const formItemRef = useMemo(() => {
    const newformItems = [...formItems]
    const roleOption = formItems?.find((item) => item.field === 'roleId')
    const departmentOption = formItems?.find((item) => item.field === 'departmentId')
    roleOption.options = entireRoles.map((item) => ({ label: item.name, value: item.id }))
    departmentOption.options = entireDepartments.map((item) => ({
      label: item.name,
      value: item.id
    }))
    return newformItems
  }, [entireRoles, entireDepartments, formItems])

  //表单提交
  const handleFormClick = () => {
    pageModalRef?.current.validateFields().then((res, err) => {
      if (!err) {
        if (formDataSubmitMode === 'add') {
          console.log('现在是添加提交')
        } else {
          console.log('现在是编辑提交')
        }
      }
    })
  }
  return (
    <WHModalWrapper>
      <Modal
        title="新建用户"
        width="40%"
        destroyOnClose
        visible={isModalVisible}
        onOk={handleFormClick}
        onCancel={() => {
          console.log('点击取消')
          closeModal()
        }}
        forceRender
        afterClose={() => {
          console.log('完全关闭重置表单')
          pageModalRef?.current.resetFields()
        }}
      >
        <WHForm ref={pageModalRef} formItems={formItemRef} {...rest} />
      </Modal>
    </WHModalWrapper>
  )
}

export default forwardRef((props, ref) => <WHModal {...props} pageModalRef={ref} />)
