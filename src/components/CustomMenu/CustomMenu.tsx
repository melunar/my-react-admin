import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import * as iconList from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'

class CustomMenu extends Component<any, any> {
  state = {
    openKeys: [],
    selectedKeys: []
  }

  // 处理 pathname
  getOpenKeys = (str: string) => {
    let newStr = ''
    const newArr = []
    const arr = str.split('/').map(i => '/' + i)
    for (let i = 1; i < arr.length - 1; i++) {
      newStr += arr[i]
      newArr.push(newStr)
    }
    return newArr
  }
  static propTypes: { menu: PropTypes.Validator<any[]> }

  // 页面刷新的时候可以定位到 menu 显示
  componentDidMount() {
    const { pathname } = this.props.location
    this.setState({
      selectedKeys: [pathname],
      openKeys: this.getOpenKeys(pathname)
    })
  }

  // 点击面包屑导航时 侧边栏同步响应
  componentDidUpdate(prevProps: any, prevState: any) {
    const { pathname } = this.props.location
    if (prevProps.location.pathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: this.getOpenKeys(pathname)
      })
    }
  }

  // 只展开一个 SubMenu
  onOpenChange = (openKeys: string | any[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) {
      // 全部关闭或者只打开一个 SubMenu
      this.setState({
        openKeys
      })
      return
    }

    // 最新展开的 SubMenu
    const latestOpenKey = openKeys[openKeys.length - 1]

    // 这里与定义的路由规则有关
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }

  renderMenuItem = ({ key, icon, title }: MenuItem) => {
    const IconComp = (iconList as any)[icon as string]
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <IconComp />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  // 循环遍历数组中的子项 subs ，生成子级 menu
  renderSubMenu = ({ key, icon, title, subs }: MenuItem) => {
    const IconComp = (iconList as any)[icon as string]
    return (
      <Menu.SubMenu
        key={key}
        title={
          <span>
            {icon && <IconComp />}
            <span>{title}</span>
          </span>
        }>
        {subs &&
          subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })}
      </Menu.SubMenu>
    )
  }

  render() {
    const { openKeys, selectedKeys } = this.state
    return (
      <Menu
        mode="inline" // vertical | horizontal | inline
        theme="dark"
        openKeys={openKeys} // 当前展开的 SubMenu 菜单项 key 数组
        selectedKeys={selectedKeys}
        onClick={({ key }) => this.setState({ selectedKeys: [key] })} // 仅仅为点击 MenuItem 的回调
        onOpenChange={this.onOpenChange} // SubMenu 展开/关闭的回调 function(openKeys: string[]) 【openKeys 是当前要展开的路径数组】
      >
        {this.props.menu &&
          this.props.menu.map((item: MenuItem) => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })}
      </Menu>
    )
  }
}

CustomMenu.propTypes = {
  menu: PropTypes.array.isRequired
}

export default withRouter(CustomMenu)
