import { Form, Input } from 'antd'
import { forwardRef } from 'react'
import { LoginAccountWrapper } from './style'

const LoginAccount = (props) => {
  const { formRef } = props

  return (
    <LoginAccountWrapper>
      <Form
        ref={formRef}
        name="account"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="用户名" name="name" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </LoginAccountWrapper>
  )
}

const LoginAccountForwardRef = forwardRef((props, ref) => {
  return <LoginAccount formRef={ref} {...props} />
})

export default LoginAccountForwardRef
