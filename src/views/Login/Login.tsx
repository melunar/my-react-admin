import React, { Component } from 'react'
import { Layout, Input, Form, Button, Divider, message, notification, FormInstance } from 'antd'
import { withRouter } from 'react-router-dom'
import axios from '@/api'
import { AdminUserUrl } from '@/api/config'
import { USER_PROTOCOL, USER_PROTOCOL_SCHEMA } from '@/admin-types/modules/User.proto'
import '@/style/view-style/login.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons/lib/icons'


class Login extends Component<any, any> {
  state = {
    loading: false
  }

  formRef = React.createRef<FormInstance<{ username: string; password: string }>>()

  timer: any

  setLoading = (status = false) => {
    this.setState({
      loading: status
    })
  }

  handleSubmit = async (values: any) => {
    const { password, username: userName } = values
    this.setLoading(true)
    const res = await axios.post(`${AdminUserUrl}${USER_PROTOCOL.USER_LOGIN.url}`, { userName, password } as USER_PROTOCOL_SCHEMA.USER_LOGIN.REQUEST) as USER_PROTOCOL_SCHEMA.USER_LOGIN.RESPONSE
    this.setLoading(false)
    if (res && res.code === 200) {
      message.success('登录成功!')
      values.auth = res.data.user.adminRole
      localStorage.setItem('user', JSON.stringify(values))
      localStorage.setItem('token', res.data.token)
      this.timer = setTimeout(() => {
        this.props.history.push('/')
      }, 300)
    } else {
      message.warn(res.message || '登陆异常，请稍后再试')
    }
  }

  componentDidMount() {
    this.formRef.current?.setFieldsValue({
      username: 'admin',
      password: '123456'
    })
  }

  componentWillUnmount() {
    notification.destroy()
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <Layout className="login animated fadeIn">
        <div className="model">
          <div className="login-form">
            <h3>DST 管理系统</h3>
            <Divider />
            <Form ref={this.formRef} onFinish={this.handleSubmit}>
              <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter<any, any>(Login)
