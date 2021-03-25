import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import axios from '@/api'
import { AdminUrl } from '@/api/config'
import { USER_PROTOCOL, USER_PROTOCOL_SCHEMA } from '@/admin-types/modules/User.proto'
import '@/style/view-style/login.scss'


class Login extends Component<any, any> {
  state = {
    loading: false
  }

  timer: any

  enterLoading = () => {
    this.setState({
      loading: true
    })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const { password, username: userName } = values
        const res = await axios.post(`${AdminUrl}${USER_PROTOCOL.USER_LOGIN.url}`, { userName, password } as USER_PROTOCOL_SCHEMA.USER_LOGIN.REQUEST) as USER_PROTOCOL_SCHEMA.USER_LOGIN.RESPONSE
        if (res && res.code === 200) {
          message.success('登录成功!')
          values.auth = res.data.user.adminRole
          localStorage.setItem('user', JSON.stringify(values))
          localStorage.setItem('token', res.data.token)
          this.enterLoading()
          this.timer = setTimeout(() => {
            this.props.history.push('/')
          }, 900)
        } else {
          message.warn(res.message || '登陆异常，请稍后再试')
        }
      }
    })
  }

  componentDidMount() {
    // notification.open({
    //   message: '欢迎使用后台管理平台',
    //   duration: null,
    //   description: '账号 admin(管理员) 其他(游客) 密码随意'
    // })
  }

  componentWillUnmount() {
    notification.destroy()
    this.timer && clearTimeout(this.timer)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Layout className="login animated fadeIn">
        <div className="model">
          <div className="login-form">
            <h3>DST 管理系统</h3>
            <Divider />
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }]
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )}
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

export default withRouter<any, any>(Form.create()(Login))
