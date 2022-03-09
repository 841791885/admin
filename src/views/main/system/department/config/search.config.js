export const searchFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeHolder: '请输入部门名称',
      rules: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeHolder: '请输入部门领导',
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
  // formTitle: '高级搜索',
  formName: 'department',
  formSize: 'large',
  isShowFooter: true
}
