import React, { useRef } from 'react'
import { Form, Input, Select, Row, Col, DatePicker, Button, Space } from 'antd'
import { SearchOutlined, SyncOutlined } from '@ant-design/icons'

import { WHFormWrapper, FromHeaderContent, FromFooterContent } from './style'

export default function WHForm(props) {
  const formRef = useRef()
  const {
    formTitle,
    formName = '',
    formSize = 'large',
    labelCol = {
      span: 6
    },
    wrapperCol = {
      span: 18
    },
    colLayout = {
      xl: 8,
      lg: 12,
      xs: 24
    },
    formItems,
    Footer
  } = props
  const handleQueryClick = () => {
    console.log('搜索')
    const FormObj = formRef.current.getFieldsValue(true)
    console.log('FormObj', FormObj)
    // dispatch(
    //   getPageListDataAction({
    //     pageName: 'users',
    //     queryInfo: {
    //       ...obj,
    //       offset: (pageInfo.currentPage - 1) * 8,
    //       size: pageInfo.pageSize
    //     }
    //   })
    // )
  }

  const handleResetClick = () => {
    console.log('重置')
    formRef.current.setFieldsValue({ cellphone: null })
    // dispatch(
    //   getPageListDataAction({
    //     pageName: 'users',
    //     queryInfo: {
    //       offset: 0,
    //       size: 10
    //     }
    //   })
    // )
  }
  //渲染表单选项
  const renderFormItem = (formItem) => {
    switch (formItem.type) {
      case 'input':
        return (
          <Form.Item label={formItem.label} name={formItem.field} rules={formItem.rules}>
            <Input placeholder={formItem.placeholder} />
          </Form.Item>
        )
      case 'select':
        return (
          <Form.Item label={formItem.label} name={formItem.field} rules={formItem.rules}>
            <Select placeholder={formItem.placeholder}>
              {formItem.options.map((selectItem) => (
                <Select.Option key={selectItem.label} value={selectItem.value}>
                  {selectItem.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )
      case 'datepicker':
        const NewDatePicker = DatePicker[formItem.otherOption.type]
        return (
          <Form.Item label={formItem.label} name={formItem.field} rules={formItem.rules}>
            <NewDatePicker placeholder={formItem.placeholder} />
          </Form.Item>
        )
    }
  }
  const defaultFooter = () => (
    <>
      <Button size="large" icon={<SyncOutlined />} onClick={handleResetClick}>
        重置
      </Button>
      <Button type="primary" icon={<SearchOutlined />} size="large" onClick={handleQueryClick}>
        搜索
      </Button>
    </>
  )
  return (
    <WHFormWrapper>
      <FromHeaderContent>{formTitle ? formTitle : null}</FromHeaderContent>
      <Form
        ref={formRef}
        name={formName}
        size={formSize}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
      >
        <Row>
          {formItems.map((formItem) => (
            <Col key={formItem.field} {...colLayout}>
              {renderFormItem(formItem)}
            </Col>
          ))}
        </Row>
      </Form>
      <FromFooterContent>
        <Space size="middle">{Footer ? <Footer /> : defaultFooter()}</Space>
      </FromFooterContent>
    </WHFormWrapper>
  )
}
