export const contentTableConfig = {
  tableTitle: '用户列表',
  renderTableItemCol: [
    // {
    //   align: 'center',
    //   title: '序号',
    //   dataIndex: 'name',
    //   type: 'text'
    // },
    {
      align: 'center',
      title: '角色名称',
      dataIndex: 'name',
      type: 'text'
    },
    {
      align: 'center',
      title: '角色权限',
      dataIndex: 'intro',
      type: 'text'
    },

    {
      align: 'center',
      title: '创建时间',
      dataIndex: 'createAt',
      type: 'time'
    },
    {
      align: 'center',
      title: '更新时间',
      dataIndex: 'updateAt',
      type: 'time'
    },
    {
      align: 'center',
      title: '操作',
      type: 'action'
    }
  ]
}
