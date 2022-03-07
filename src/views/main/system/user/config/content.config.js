import { Button, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { utcToDateTimeFormat } from '@/utils/date-formate'

export const contentTableConfig = {
  tableTitle: '用户列表',
  pageName: 'users',
  renderTableItemCol: [
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
}
