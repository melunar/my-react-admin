import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import dayjs from 'dayjs'
import { Layout, Divider, Row, Col, Tag, Table } from 'antd'
import { AdminUrl } from '@/api/config'
import axios from '@/api'
import { JA } from '@/admin-types/modules/JenkinsApplication.d'
import '@/style/view-style/table.scss'
import common from './common'

const testData: JA.JenkinsApplication[] = [{
  projectName: '1111',
  applyTime: new Date().getTime() - 60000,
  status: 1,
  repositoryURL: 'file:///Users/admin/Downloads/%23%23%20axure/index.html#id=%81%9A&g=1',
  devDeployPath: '0000',
  masterDeployPath: '2222',
  orgName: '啊啊啊33',
  description: '一个小项目',
}, {
  projectName: '2222',
  applyTime: new Date().getTime() - 50000,
  status: 2,
  repositoryURL: 'file:///Users/admin/Downloads/%23%23%20axure/index.html#id=%81%9A&g=1',
  devDeployPath: '0000',
  masterDeployPath: '2222',
  description: '一个小项目',
}, {
  projectName: '333',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 40000,
  status: 3,
  applyWriteBackMessage: '你不行啊',
  repositoryURL: 'file:///Users/admin/Downloads/%23%23%20axure/index.html#id=%81%9A&g=1',
  devDeployPath: '0000',
  masterDeployPath: '2222',
  description: '一个小项目',
}, {
  projectName: '4444',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 30000,
  status: 5,
  repositoryURL: 'file:///Users/admin/Downloads/%23%23%20axure/index.html#id=%81%9A&g=1',
  devDeployPath: '0000',
  masterDeployPath: '2222',
  description: '一个小项目',
}, {
  projectName: '65555',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 20000,
  status: 5,
  createSuccessTime: new Date().getTime() - 10000,
  repositoryURL: 'file:///Users/admin/Downloads/%23%23%20axure/index.html#id=%81%9A&g=1',
  devDeployPath: '0000',
  masterDeployPath: '2222',
  description: '一个小项目',
}]

const columns = [
  {
    title: '项目名称',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: '所属组织',
    dataIndex: 'orgName',
    key: 'orgName'
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
    key: 'applyTime',
    render: (dateTime: number) => {
      return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: JA.JAStatus) => {
      const colorMapper: { [key: number]: string } = { [JA.JAStatus.APPLYING]: 'gray', [JA.JAStatus.REAPPLYING]: 'blue', [JA.JAStatus.RECEIVE]: 'pink', [JA.JAStatus.RETURN]: 'red', [JA.JAStatus.SUCCESS]: 'green'}
      return <Tag color={colorMapper[status]}>{common.statusNameMapper[status]}</Tag>
    }
  },
  {
    title: '申请恢复',
    key: 'applyWriteBackMessage',
    dataIndex: 'applyWriteBackMessage',
    render: (applyWriteBackMessage: number, _data: JA.JenkinsApplication) => {
      return _data.status === JA.JAStatus.RETURN ? applyWriteBackMessage : '--'
    }
  },
  {
    title: '描述',
    key: 'description',
    dataIndex: 'description'
  },
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
        tableData: testData
      })
    })
  }

  render() {
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={['系统', '应用管理']}></CustomBreadcrumb>
        </div>
        <Row>
          <Col>
            <div className="base-style">
              <h3 id="basic">我的应用</h3>
              <Divider />
              <Table rowKey="projectName" columns={columns} dataSource={this.state.tableData} />
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default MineApplication
