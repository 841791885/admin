import React from 'react'
import { useSelector } from 'react-redux'
import { useSetState } from 'ahooks'
import { Button, Table, Space, Pagination, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { utcToDateTimeFormat } from '@/utils/date-formate'

import { WHTabbleWrapper } from './style'
export default function WHTable() {
  const { dataSource, usersTotalCount } = useSelector((state) => ({
    dataSource: state.system.usersList,
    usersTotalCount: state.system.usersTotalCount
  }))

  // 0.绑定pageInfo
  const [pageInfo, setPageInfo] = useSetState({
    currentPage: 1,
    pageSize: 10
  })

  const columns = [
    {
      align: 'center',
      title: '序号',
      dataIndex: 'name',
      render: (text, record, index) => <div>{index + 1}</div>
    },
    {
      align: 'center',
      title: '真实名',
      dataIndex: 'realname'
    },
    {
      align: 'center',
      title: '手机号码',
      dataIndex: 'cellphone'
    },
    {
      align: 'center',
      title: '状态',
      dataIndex: 'enable',
      render: (enable) => (enable ? <Tag color="#87d068">启用</Tag> : <Tag color="#f50"> 禁用</Tag>)
    },
    {
      align: 'center',
      title: '创建时间',
      dataIndex: 'createAt',
      render: (createAt) => <div>{utcToDateTimeFormat(createAt)}</div>
    },
    {
      align: 'center',
      title: '更新时间',
      dataIndex: 'updateAt',
      render: (updateAt) => <div>{utcToDateTimeFormat(updateAt)}</div>
    },
    {
      align: 'center',
      title: '操作',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />}>
            编辑
          </Button>
          <Button type="danger" icon={<DeleteOutlined />}>
            删除
          </Button>
        </Space>
      )
    }
  ]

  const changePage = (page, pageSize) => {
    setPageInfo({
      currentPage: page,
      pageSize
    })
  }

  return (
    <WHTabbleWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(record) => record.id}
        bordered
        pagination={false}
      />
      <div className="pagination">
        <Pagination
          total={usersTotalCount}
          pageSize={pageInfo.pageSize}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `共 ${total} 条`}
          onChange={changePage}
        />
      </div>
    </WHTabbleWrapper>
  )
}
