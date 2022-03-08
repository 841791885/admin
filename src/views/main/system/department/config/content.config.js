import { Button, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { utcToDateTimeFormat } from '@/utils/date-formate'

export const contentTableConfig = {
  tableTitle: '部门列表',
  renderTableItemCol: [
    {
      align: 'center',
      title: '序号',
      dataIndex: 'name',
      render: (text, record, index) => <div>{index + 1}</div>
    },
    {
      align: 'center',
      title: '部门名称',
      dataIndex: 'name'
    },
    {
      align: 'center',
      title: '部门领导',
      dataIndex: 'leader'
    },
    {
      align: 'center',
      title: '上级部门',
      dataIndex: 'parentId'
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
