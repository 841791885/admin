import { Button, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { utcToDateTimeFormat } from '@/utils/date-formate'

export const contentTableConfig = {
  tableTitle: '用户列表',
  renderTableItemCol: [
    {
      align: 'center',
      title: '菜单名称',
      dataIndex: 'name'
    },
    {
      align: 'center',
      title: '级别',
      dataIndex: 'type'
    },
    {
      align: 'center',
      title: '菜单url',
      dataIndex: 'url'
    },
    {
      align: 'center',
      title: '排序',
      dataIndex: 'sort'
    },
    {
      align: 'center',
      title: '权限',
      dataIndex: 'permission'
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
