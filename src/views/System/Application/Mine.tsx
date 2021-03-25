import React, { Component, ReactElement } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import dayjs from 'dayjs'
import { Modal, Layout, Divider, Row, Col, Tag, Table, Button, Descriptions, Form, Input, Select, FormInstance } from 'antd'
import { AdminUrl } from '@/api/config'
import axios from '@/api'
import { JA } from '@/admin-types/modules/JenkinsApplication.d'
import '@/style/view-style/table.scss'
import common from './common'

const testData: JA.JenkinsApplication[] = [{
  projectName: '咸鱼H5',
  applyTime: new Date().getTime() - 60000,
  status: 1,
  repositoryURL: 'file:///Users/admin/Downloads/%23%2',
  devDeployPath: '0000',
  masterDeployPath: 'https://gitlab.turingsenseai.com/front-end/xianyu_h5/blob/dev/src/types/schema/xy.ts',
  orgName: '啊啊啊33',
  priority: 2,
  description: '一个小项目',
}, {
  projectName: '包小鉴小程序',
  applyTime: new Date().getTime() - 50000,
  status: 2,
  repositoryURL: 'file:///Users/admin/Downloads/%23%2',
  devDeployPath: '0000',
  masterDeployPath: 'https://gitlab.turingsenseai.com/front-end/xianyu_h5/blob/dev/src/types/schema/xy.ts',
  description: '一个小项目',
  priority: 3,
}, {
  projectName: '333',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 40000,
  status: 3,
  applyWriteBackMessage: '你不行啊',
  repositoryURL: 'file:///Users/admin/Downloads/%23%2',
  devDeployPath: '0000',
  masterDeployPath: 'https://gitlab.turingsenseai.com/front-end/xianyu_h5/blob/dev/src/types/schema/xy.ts',
  description: '一个小项目',
  priority: 3,
}, {
  projectName: '4444',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 30000,
  status: 4,
  repositoryURL: 'file:///Users/admin/Downloads/%23%2',
  devDeployPath: '0000',
  masterDeployPath: 'https://gitlab.turingsenseai.com/front-end/xianyu_h5/blob/dev/src/types/schema/xy.ts',
  description: '一个小项目',
}, {
  projectName: '65555',
  orgName: '啊啊啊',
  applyTime: new Date().getTime() - 20000,
  status: 5,
  createSuccessTime: new Date().getTime() - 10000,
  repositoryURL: 'file:///Users/admin/Downloads/%23%2',
  devDeployPath: '0000',
  masterDeployPath: 'https://gitlab.turingsenseai.com/front-end/xianyu_h5/blob/dev/src/types/schema/xy.ts',
  description: '一个小项目',
}]

interface State {
  tableData: JA.JenkinsApplication[];
  modalDetailShow: boolean;
  columns: any;
  modalDetailData: JA.JenkinsApplication;
  modalAddEditShow: boolean;
  modalAddEditData: JA.JenkinsApplication;
}

class MineApplication extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      tableData: [],
      columns: [
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
            const colorMapper: { [key: number]: string } = { [JA.JAStatus.APPLYING]: 'gray', [JA.JAStatus.REAPPLYING]: 'gray', [JA.JAStatus.RECEIVE]: 'blue', [JA.JAStatus.RETURN]: 'red', [JA.JAStatus.SUCCESS]: 'green'}
            return <Tag color={colorMapper[status]}>{common.statusNameMapper[status]}</Tag>
          }
        },
        {
          title: '申请优先级',
          dataIndex: 'priority',
          key: 'priority',
          render: (status: JA.JAStatus) => {
            return <Tag color="gray">{status ? common.priorityNameMapper[status] : '--'}</Tag>
          }
        },
        {
          title: '申请回复',
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
        }, {
          title: '操作',
          key: 'action',
          with: 220,
          render: (_text: any, item: JA.JenkinsApplication) => {
            const { status } = item
            let buttons: ReactElement = <span></span>
            const detailBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                // console.log('详情')
                this.setState({ modalDetailData: item, modalDetailShow: true })
              }}
            >详情</Button>
            const editBtn = <Button
              type="ghost"
              size="small"
              onClick={() => {
                console.log('编辑')
                this.setState({ modalAddEditShow: true, modalAddEditData: JSON.parse(JSON.stringify(item)) as JA.JenkinsApplication })
              }}
            >编辑</Button>
            const buildBtn = <Button
              type="default"
              size="small"
              onClick={() => {
                console.log('构建')
              }}
            >构建</Button>
            const distributeBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log('分发')
              }}
            >分享权限</Button>
            const viewBuildBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log('查看构建')
              }}
            >查看构建</Button>
            // style={{ whiteSpace: 'nowrap' }}
            if (status === JA.JAStatus.APPLYING || status === JA.JAStatus.REAPPLYING) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/>{editBtn}</span>)
            }
            if (status === JA.JAStatus.RECEIVE) {
              buttons = (<span>{detailBtn}</span>)
            }
            if (status === JA.JAStatus.SUCCESS) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/>{distributeBtn}<br/><br style={{ lineHeight: '10px' }}/>{buildBtn}<Divider type='vertical'/>{viewBuildBtn}</span>)
            }
            if (status === JA.JAStatus.RETURN) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/>{editBtn}</span>)
            }
            return buttons
          }
        }
      ],
      modalAddEditShow: false,
      modalDetailShow: false,
      modalAddEditData: {
        projectName: '',
        applyTime: 0,
        status: 1,
        repositoryURL: '',
        devDeployPath: '',
        masterDeployPath: '',
        description: '',
        orgName: ''
      },
      modalDetailData: {
        projectName: '',
        applyTime: 0,
        status: 1,
        repositoryURL: '',
        devDeployPath: '',
        masterDeployPath: '',
        description: '',
        orgName: '',
        token: '***'
      },
    }
  }

  editAddFormRef = React.createRef<FormInstance>()

  componentDidMount () {
    console.log('...componentDidMount')
    axios.get(`${AdminUrl}/user/list`, {}).then(res => {
      this.setState({
        tableData: testData
      })
    })
  }
  editAddFinish = (values: any) => {
    debugger
  }
  render() {
    const { columns, modalDetailData } = this.state
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
        {/* 添加-编辑 */}
        <Modal
          title="项目创建"
          centered
          visible={this.state.modalAddEditShow}
          onOk={() => { this.setState({ modalAddEditShow: false }) }}
          onCancel={() => { this.setState({ modalAddEditShow: false }) }}
          width={900}
        >
          <Form ref={this.editAddFormRef} name="control-ref" onFinish={this.editAddFinish}>
            <Form.Item name="projectName" label="项目名称" rules={[{ required: true }]} >
            <Input placeholder="请输入项目名称" />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
              <Select
                placeholder="选择项目所属组织"
                allowClear
              >
                <Select.Option value="male">male</Select.Option>
                <Select.Option value="female">female</Select.Option>
                <Select.Option value="other">other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={() => {
                this.editAddFormRef.current!.resetFields()
              }}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        {/* 详情 */}
        <Modal
          title="项目详情"
          centered
          visible={this.state.modalDetailShow}
          onOk={() => { this.setState({ modalDetailShow: false }) }}
          onCancel={() => { this.setState({ modalDetailShow: false }) }}
          width={900}
        >
          <Descriptions column={1}>
            <Descriptions.Item label="项目名称">{modalDetailData.projectName}</Descriptions.Item>
            <Descriptions.Item label="所属组织">{modalDetailData.orgName}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{dayjs(modalDetailData.createSuccessTime || modalDetailData.applyTime).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
            <Descriptions.Item label="状态">{common.statusNameMapper[modalDetailData.status]}</Descriptions.Item>
            <Descriptions.Item label="申请优先级">{modalDetailData.priority ? common.priorityNameMapper[modalDetailData.priority] : '--'}</Descriptions.Item>
            <Descriptions.Item label="token">{modalDetailData.token}<Tag color="red">仅管理员可见</Tag></Descriptions.Item>
            <Descriptions.Item label="项目地址">{modalDetailData.repositoryURL}</Descriptions.Item>
            <Descriptions.Item label="测试环境部署路径">
              <Button type="link" target="blank" href={modalDetailData.devDeployPath}>{modalDetailData.devDeployPath}</Button>
            </Descriptions.Item>
            <Descriptions.Item label="生产环境部署路径">
              <Button type="link" target="blank" href={modalDetailData.masterDeployPath}>{modalDetailData.masterDeployPath}</Button>
            </Descriptions.Item>
            {modalDetailData.status === JA.JAStatus.RETURN && <Descriptions.Item label="申请回复信息">{modalDetailData.applyWriteBackMessage}</Descriptions.Item>}
            <Descriptions.Item label="描述">{modalDetailData.description}</Descriptions.Item>
          </Descriptions>
        </Modal>
      </Layout>
    )
  }
}

export default MineApplication
