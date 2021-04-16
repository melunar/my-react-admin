import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, BackTop, message } from 'antd'
import routes from '@/routes'
import { clearUserLocalData } from '@/utils'
// import axios from '@/api'
// import { AdminUrl } from '@/api/config'
// import { USER_PROTOCOL, USER_PROTOCOL_SCHEMA } from '@/admin-types/modules/User.proto'
import { menuToggleAction } from '@/store/actionCreators'
import echarts from 'echarts/lib/echarts'
import avatar from '@/assets/images/user.jpg'
import menu from './menu'
import '@/style/layout.scss'

import AppHeader from './AppHeader'
// import AppAside from './AppAside'
import AppFooter from './AppFooter'

const { Content } = Layout


class DefaultLayout2 extends Component<any, any> {
  timer: any
  state = {
    avatar,
    show: true,
    menu: []
  }

  isLogin = () => {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/login')
    } else {
      this.setState({
        menu: this.getMenu(menu)
      })
    }
  }

  loginOut = () => {
    clearUserLocalData()
    this.props.history.push('/login')
    message.success('登出成功!')
  }
  getMenu = (menu: MenuItem[]) => {
    let newMenu
    const auth = JSON.parse(localStorage.getItem('user') as string).auth
    if (!auth) {
      return menu
    } else {
      // newMenu = menu.filter((res: any) => res.auth && res.auth.indexOf(auth) !== -1)
      // newMenu 需要递归获取权限
      const filterMenu = (menuList: MenuItem[], userType: number) => {
        return menuList.filter(item => {
          return item.auth?.includes(userType)
        }).map(item => {
            item = Object.assign({}, item)
            if (item.subs) {
              item.subs = filterMenu(item.subs, userType)
            }
            return item
        })
      }
      newMenu = filterMenu(menu, auth)
      return newMenu
    }
  }

  componentDidMount() {
    this.isLogin()
  }

  componentDidUpdate() {
    const { pathname } = this.props.location

    // 菜单收缩展开时 echarts 图表的自适应
    if (pathname === '/' || pathname === '/index') {
      this.timer = setTimeout(() => {
        echarts.init(document.getElementById('bar') as HTMLDivElement).resize()
        echarts.init(document.getElementById('line') as HTMLDivElement).resize()
        echarts.init(document.getElementById('pie') as HTMLDivElement).resize()
        echarts.init(document.getElementById('pictorialBar') as HTMLDivElement).resize()
        echarts.init(document.getElementById('scatter') as HTMLDivElement).resize()
      }, 500)
    } else {
      this.timer = null
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    const { menuClick, menuToggle } = this.props
    const { auth } = JSON.parse(localStorage.getItem('user') as string) ? JSON.parse(localStorage.getItem('user') as string) : ''
    return (
      <Layout className="app">
        <BackTop />
        <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
          <AppHeader
            menuToggle={menuToggle}
            menuClick={menuClick}
            avatar={this.state.avatar}
            // show={this.state.show}
            loginOut={this.loginOut}
          />
          <Content className="content">
            <Switch>
              {routes.map(item => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    exact={item.exact}
                    render={props =>
                      // admin 为 0
                      !auth ? (
                        <item.component {...props} />
                      ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                        <item.component {...props} />
                      ) : (
                        // 这里也可以跳转到 403 页面
                        '啥也没有'
                      )
                    }></Route>
                )
              })}
              <Redirect to="/404" />
            </Switch>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    )
  }
}

const stateToProp = (state: any) => ({
  menuToggle: state.menuToggle
})

const dispatchToProp = (dispatch: any) => ({
  menuClick() {
    dispatch(menuToggleAction())
  }
})

export default withRouter(
  connect(
    stateToProp,
    dispatchToProp
  )(DefaultLayout2 as any)
)
