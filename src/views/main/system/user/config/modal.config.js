export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名',
      rules: [
        {
          required: true
        }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: [{ required: true }],
      isHidden: false
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeHolder: '请输入密码',
      rules: []
      // isHidden: false
    },
    { field: 'cellphone', type: 'input', label: '电话号码', placeHolder: '请输入电话号码' },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeHolder: '请选择角色',
      options: [],
      rules: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeHolder: '请选择部门',
      options: [],
      rules: []
    }
  ],
  formSize: 'large',
  formName: 'usersmodal',
  isShowFooter: false,
  colLayout: { span: 24 }
}
