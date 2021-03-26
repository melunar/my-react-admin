import React, { Component, ReactElement } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import dayjs from 'dayjs'
import { Modal, Layout, message, Divider, Row, Col, Tag, Table, Button, Descriptions, Form, Input, Select, FormInstance } from 'antd'
import { AdminUrl } from '@/api/config'
import axios from '@/api'
import { JA } from '@/admin-types/modules/JenkinsApplication'
import '@/style/view-style/table.scss'
import common from './common'

interface State {
  tableData: JA.JenkinsApplication[];
  modalDetailShow: boolean;
  modalBuildShow: boolean;
  modalDistributeShow: boolean;
  columns: any;
  modalDetailData: JA.JenkinsApplication;
}

class AllApplication extends Component<any, State> {
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
                this.setState({ modalDetailData: item, modalDetailShow: true })
              }}
            >详情</Button>

            const receiveBtn = <Button
              size="small"
              type="default"
              onClick={() => {
                Modal.confirm({
                  content: `确认项目配置填写完整，不可回退，接受后申请者不可再编辑`,
                  onOk: () => {
                    console.log('todo')
                  },
                  onCancel: () => {
                    console.log('Cancel')
                  },
                })
              }}
            >接受申请</Button>

            const returnBtn = <Button
              type="default"
              size="small"
              danger
              onClick={() => {
                const res = prompt('确认打回，请输入打回原因')
                if (res === null) return
                else if (res === '') {
                  message.warn('请输入打回原因')
                } else {
                  console.log('toto')
                  message.warn('打回了')
                }
              }}
            >打回申请</Button>

            const successBtn = <Button
              type="primary"
              size="small"
              danger
              onClick={() => {
                Modal.confirm({
                  content: `确认项目Jenkins创建成功，标记为可用状态吗？不可回退`,
                  onOk: () => {
                    console.log('todo')
                  },
                  onCancel: () => {
                    console.log('Cancel')
                  },
                })
              }}
            >创建成功</Button>

            const buildBtn = <Button
              type="default"
              size="small"
              onClick={() => {
                console.log('构建')
                this.buildFormRef.current?.resetFields()
                setTimeout(() => {
                  this.setState({ modalBuildShow: true })
                })
              }}
            >构建</Button>

            const distributeBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log('分发')
                this.distributeFormRef.current?.resetFields()
                setTimeout(() => {
                  this.setState({ modalDistributeShow: true })
                })
              }}
            >分享权限</Button>

            const viewBuildBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                window.open('http://121.37.158.0:8080/')
              }}
            >查看构建</Button>

            // style={{ whiteSpace: 'nowrap' }}
            if (status === JA.JAStatus.APPLYING || status === JA.JAStatus.REAPPLYING) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/>{receiveBtn}<Divider type='vertical'/>{returnBtn}</span>)
            }
            if (status === JA.JAStatus.RECEIVE) {
              buttons = (<span>{successBtn}<Divider type='vertical'/>{detailBtn}</span>)
            }
            if (status === JA.JAStatus.SUCCESS) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/>{distributeBtn}<br/><br style={{ lineHeight: '10px' }}/>{buildBtn}<Divider type='vertical'/>{viewBuildBtn}</span>)
            }
            if (status === JA.JAStatus.RETURN) {
              buttons = (<span>{detailBtn}<Divider type='vertical'/></span>)
            }
            return buttons
          }
        }
      ],
      modalDetailShow: false,
      modalDistributeShow: false,
      modalBuildShow: false,
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

  /** 各个表单 */
  editAddFormRef = React.createRef<FormInstance<JA.JenkinsApplication>>()
  searchFormRef = React.createRef<FormInstance>()
  buildFormRef = React.createRef<FormInstance<{ branch: string }>>()
  distributeFormRef = React.createRef<FormInstance<{ userName: string }>>()

  componentDidMount () {
    console.log('...componentDidMount')
    axios.get(`${AdminUrl}/user/list`, {}).then(res => {
      this.setState({
        tableData: common.testData
      })
    })
  }
  /** 项目分发权限 提交 */
  distributeFinish = (values: any) => {
    console.log('val', values)
    Modal.confirm({
      content: `确定把构建权限分配给${values.userName}吗，不可撤回`,
      onOk: () => {
        console.log('todo 下发')
        this.setState({ modalDistributeShow: false })
        this.distributeFormRef.current?.resetFields()
      },
      onCancel: () => {
        console.log('Cancel')
      },
    });
  }
  /** 项目构建 提交 */
  buildFinish = (values: any) => {
    console.log('val', values)
    this.buildFormRef.current?.resetFields()
    this.setState({ modalBuildShow: false })
  }
  /** 搜索 提交 */
  searchFinish = (values: any) => {
    console.log('val', values)
  }
  render() {
    const { columns, modalDetailData } = this.state
    const addEditFormItemLayout = {
      labelCol: {
          xs: { span: 6 },
          sm: { span: 6 }
      },
      wrapperCol: {
          xs: { span: 6 },
          sm: { span: 10 }
      }
    }
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={['系统', '应用管理']}></CustomBreadcrumb>
        </div>
        <Row>
          <Col>
            <div className="base-style">
              <h3 id="basic">应用管理-审核</h3>
              <Divider />
              <div style={{ margin: '10px 0' }}>
                <Form layout="inline" ref={this.searchFormRef} onFinish={this.searchFinish}>
                  <Form.Item name="projectName" label="项目名称" >
                    <Input placeholder="请输入项目名称" allowClear />
                  </Form.Item>
                  <Form.Item name="status" label="状态">
                    <Select placeholder="请选择状态" style={{ width: '200px' }} allowClear>
                      {common.statusList.map((item, ii) => (
                        <Select.Option key={ii + ''} value={item.value}>{item.name}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      搜索
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <Divider />
              <Table rowKey="projectName" columns={columns} dataSource={this.state.tableData} />
            </div>
          </Col>
        </Row>
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
        {/* 权限下发 */}
        <Modal
          title="权限下发"
          centered
          visible={this.state.modalDistributeShow}
          onOk={() => { this.setState({ modalDistributeShow: false }) }}
          onCancel={() => { this.setState({ modalDistributeShow: false }) }}
          width={600}
        >
          <Form {...addEditFormItemLayout} ref={this.distributeFormRef} onFinish={this.distributeFinish}>
            <Form.Item name="userName" label="用户名" rules={[{ required: true }]} >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item wrapperCol={{ xs: { span: 24, offset: 0, }, sm: { span: 16, offset: 8 } }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        {/* 构建 */}
        <Modal
          title="构建"
          centered
          visible={this.state.modalBuildShow}
          onOk={() => { this.setState({ modalBuildShow: false }) }}
          onCancel={() => { this.setState({ modalBuildShow: false }) }}
          width={600}
        >
          <Form {...addEditFormItemLayout} ref={this.buildFormRef} onFinish={this.buildFinish}>
            <Form.Item name="branch" label="选择环境">
              <Select placeholder="请选择环境">
                {common.branchList.map((item, ii) => (
                  <Select.Option key={ii + ''} value={item.value}>{item.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ xs: { span: 24, offset: 0, }, sm: { span: 16, offset: 8 } }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    )
  }
}

export default AllApplication
