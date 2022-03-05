import React, { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'ahooks'
import { Form, Input, Button, Select, DatePicker, Row, Col, Table, Space, Pagination } from 'antd'
import { SearchOutlined, SyncOutlined } from '@ant-design/icons'

import { getPageListDataAction } from '@/store/main/system/actionCreators'
import { UserWrapper } from './style'

const { RangePicker } = DatePicker
const User = memo(() => {
  const formRef = useRef()
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(
      getPageListDataAction({
        pageName: 'users',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    )
  })

  const { dataSource } = useSelector((state) => ({
    dataSource: state.system.usersList
  }))
  const handleQueryClick = () => {
    console.log('搜索')
    formRef.current.validateFields().then((res, err) => {
      console.log(res)
      console.log(err)
    })
  }
  const columns = [
    {
      align: 'center',
      title: '序号',
      dataIndex: 'name',
      key: 'name',
      render: (text, record, index) => <div>{index + 1}</div>
    },
    {
      align: 'center',
      title: '真实名',
      dataIndex: 'realname',
      key: 'age'
    },
    {
      align: 'center',
      title: '手机号码',
      dataIndex: 'cellphone',
      key: 'cellphone'
    },
    {
      align: 'center',
      title: '状态',
      key: 'enable',
      dataIndex: 'enable',
      render: (enable) => (enable ? <div>启用</div> : <div>禁用</div>)
    },
    {
      align: 'center',
      title: '创建时间',
      key: 'createAt',
      dataIndex: 'createAt',
      render: (createAt) => <div>createAt</div>
    },
    {
      align: 'center',
      title: '更新时间',
      key: 'updateAt',
      dataIndex: 'updateAt',
      render: (updateAt) => <div>updateAt</div>
    },
    {
      align: 'center',
      title: '操作',
      key: 'handler',
      render: (text, record) => (
        <Space size="middle">
          <Button>编辑</Button>
          <Button>删除</Button>
        </Space>
      )
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      realname: 'John Brown',
      cellphone: 1323232313,
      createAt: '2022-11-12',
      updateAt: '2022-11-12',
      enable: 1,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      realname: 'Jim Green',
      cellphone: 1323232313,
      createAt: '2022-11-12',
      updateAt: '2022-11-12',
      enable: 0,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      realname: 'Joe Black',
      cellphone: 1323232313,
      createAt: '2022-11-12',
      updateAt: '2022-11-12',
      enable: 1,
      address: 'Sidney No. 1 Lake Park'
    }
  ]

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
      <div className="table">
        <Table columns={columns} dataSource={dataSource} bordered pagination={false} />
        <div className="pagination">
          <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条`}
          />
        </div>
      </div>
    </UserWrapper>
  )
})

export default User
