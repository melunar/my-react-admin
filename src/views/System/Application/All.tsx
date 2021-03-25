import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table } from 'antd'
import { AdminUrl } from '@/api/config'
import axios from '@/api'
import '@/style/view-style/table.scss'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render: (sex: number) => {
      const colorMapper: { [key: number]: string } = {0: 'gray', 1: 'blue', 2: 'pink'}
      const sexMapper: { [key: number]: string } = { 0: '未知', 1: '男生', 2: '女生' }
      return <Tag color={colorMapper[sex]}>{sexMapper[sex]}</Tag>
    }
  },
  {
    title: '角色',
    dataIndex: 'adminRole',
    key: 'adminRole',
    render: (adminRole: number) => {
      const adminRoleMapper: { [key: number]: string } = {0: '管理员', 1: '普通'}
      const colorMapper: { [key: number]: string } = {0: 'red', 1: 'gray'}
      return <Tag color={colorMapper[adminRole]}>{adminRoleMapper[adminRole]}</Tag>
    }
  },
  {
    title: '手机号',
    key: 'phone',
    dataIndex: 'phone'
  },
  {
    title: '注册时间',
    key: 'registerTime',
    dataIndex: 'registerTime',
    render: (dateTime: number) => (new Date(dateTime).toLocaleDateString())
  }
]


class MineApplication extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      tableData: []
    }
  }

  componentDidMount () {
    console.log('...componentDidMount')
    axios.get(`${AdminUrl}/user/list`, {}).then(res => {
      this.setState({
        tableData: res.data.list
      })
    })
  }

  render() {
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={['系统', '用户管理']}></CustomBreadcrumb>
        </div>
        <Row>
          <Col>
            <div className="base-style">
              <h3 id="basic">应用管理</h3>
              <Divider />
              <Table rowKey="id" columns={columns} dataSource={this.state.tableData} />
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default MineApplication
