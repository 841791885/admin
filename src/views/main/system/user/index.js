import React, { memo, useRef } from 'react'
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd'

import { SearchOutlined, SyncOutlined } from '@ant-design/icons'
import { UserWrapper } from './style'

const { RangePicker } = DatePicker
const User = memo(() => {
  const formRef = useRef()
  const handleQueryClick = () => {
    console.log('搜索')
    formRef.current.validateFields().then((res, err) => {
      console.log(res)
      console.log(err)
    })
  }
  return (
    <UserWrapper>
      <div className="from">
        <div className="header"></div>
        <Form
          ref={formRef}
          name="basic"
          size="large"
          labelCol={{
            span: 6
          }}
          wrapperCol={{
            span: 18
          }}
          initialValues={{
            remember: true
          }}
          autoComplete="off"
        >
          <Row>
            <Col xl={8} lg={12} xs={24}>
              <Form.Item label="用户名" name="name">
                <Input placeholder="请输入用户名" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <Form.Item label="真实姓名" name="realname">
                <Input placeholder="请输入真实姓名" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <Form.Item label="手机号码" name="cellphone">
                <Input placeholder="请输入手机号码" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <Form.Item label="状态" name="enable">
                <Select placeholder="请选择状态">
                  <Select.Option value="0" key="0">
                    启用
                  </Select.Option>
                  <Select.Option value="1" key="1">
                    禁用
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={8} lg={12} xs={24}>
              <Form.Item label="选择日期" name="createAt">
                <RangePicker placeholder={['开始时间', '结束时间']} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className="footer">
          <div className="button-group">
            <Button size="large" icon={<SyncOutlined />}>
              重置
            </Button>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="large"
              style={{ marginLeft: '10px' }}
              onClick={handleQueryClick}
            >
              搜索
            </Button>
          </div>
        </div>
      </div>
    </UserWrapper>
  )
})

export default User
