export const searchFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeHolder: '请输入角色名称',
      rules: []
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeHolder: '请输入权限介绍',
      rules: []
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
  formName: 'role',
  formSize: 'large'
}
