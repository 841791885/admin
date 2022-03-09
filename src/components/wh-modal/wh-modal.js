import React, { forwardRef, useMemo } from 'react'
import { Modal } from 'antd'

import WHForm from '@/components/wh-form/wh-form'

import { WHModalWrapper } from './style'
import { useSelector } from 'react-redux'
function WHModal(props) {
  const { modalVisible, toggleModalVisible, handleFormClick, pageModalRef } = props
  const { entireRoles, entireDepartments } = useSelector((state) => ({
    entireRoles: state.common.entireRoles,
    entireDepartments: state.common.entireDepartments
  }))
  const formItems = [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名',
      rules: [
        {
          required: true
        }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: [{ required: true }]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeHolder: '请输入密码'
      // isHidden: false
    },
    { field: 'cellphone', type: 'input', label: '电话号码', placeHolder: '请输入电话号码' },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeHolder: '请选择角色',
      options: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeHolder: '请选择部门',
      options: []
    }
  ]
  const formItemRef = useMemo(() => {
    const roleOption = formItems?.find((item) => item.field === 'roleId')
    const departmentOption = formItems?.find((item) => item.field === 'departmentId')
    roleOption.options = entireRoles.map((item) => ({ label: item.name, value: item.id }))
    departmentOption.options = entireDepartments.map((item) => ({
      label: item.name,
      value: item.id
    }))
    return formItems
  }, [entireRoles, entireDepartments])
  console.log('formItemRef', formItemRef)
  return (
    <WHModalWrapper>
      <Modal
        title="新建用户"
        width="40%"
        destroyOnClose
        visible={modalVisible}
        onOk={handleFormClick}
        onCancel={toggleModalVisible}
        forceRender
        afterClose={() => {
          console.log('完全关闭重置表单')
          pageModalRef?.current.resetFields()
        }}
      >
        <WHForm
          ref={pageModalRef}
          formSize="large"
          formName="usersmodal"
          isShowFooter={false}
          colLayout={{ span: 24 }}
          formItems={formItemRef}
        />
      </Modal>
    </WHModalWrapper>
  )
}

export default forwardRef((props, ref) => <WHModal {...props} pageModalRef={ref} />)
