export const searchFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名',
      rules: []
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: []
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeHolder: '请输入手机号码',
      rules: []
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeHolder: '请选择状态',
      rules: [],
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      placeholder: ['开始时间', '结束时间'],
      otherOption: {
        type: 'RangePicker'
      }
    }
  ],
  formTitle: '高级搜索',
  formName: 'users',
  formSize: 'large',
  isShowFooter: true
}
