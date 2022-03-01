import { Button, Form, Input } from 'antd'
import { LoginPhoneWrapper } from './style'
const LoginPhone = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <LoginPhoneWrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="手机号"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="验证码"
          name="verify"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <div className="verfiy-code">
            <Input />
            <Button type="primary" className="get-btn">
              获取验证码
            </Button>
          </div>
        </Form.Item>
      </Form>
    </LoginPhoneWrapper>
  )
}

export default LoginPhone
