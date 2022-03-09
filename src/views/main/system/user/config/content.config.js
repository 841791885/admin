// import { Button, Space, Tag } from 'antd'
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

// import { utcToDateTimeFormat } from '@/utils/date-formate'

export const contentTableConfig = {
  tableTitle: '用户列表',
  tableItemCol: [
    {
      title: '序号',
      type: 'index'
    },
    {
      title: '真实名',
      dataIndex: 'realname',
      type: 'text'
    },
    {
      title: '手机号码',
      dataIndex: 'cellphone',
      type: 'text'
    },
    {
      title: '状态',
      dataIndex: 'enable',
      type: 'tag'
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      type: 'time'
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      type: 'time'
    },
    {
      title: '操作',
      type: 'action'
    }
  ]
}
