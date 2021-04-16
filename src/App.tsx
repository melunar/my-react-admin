import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import loadable from './utils/loadable'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'

// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))
const DefaultLayout2 = loadable(() => import(/* webpackChunkName: 'default' */ './containers/index2'))

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login/index'))

const App = () => {
  const globalLoading = useSelector((state: any) => state.globalLoading)
  return (
    <Spin spinning={globalLoading} wrapperClassName="page-loading">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/index" />} />
          <Route path="/500" component={View500} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={View404} />
          <Route path="/test" component={DefaultLayout2} />
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    </Spin>
  )
}

export default App
