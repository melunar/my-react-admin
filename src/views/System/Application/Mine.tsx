import React, { Component, ReactElement } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import dayjs from 'dayjs'
import { Modal, Layout, Divider, Row, Col, Tag, Table, Button, Descriptions, Form, Input, Select, FormInstance, AutoComplete, message } from 'antd'
import { AdminJenkinsApplicationUrl } from '@/api/config'
import axios, { get, post } from '@/api'
import { PlusOutlined } from '@ant-design/icons'
import { JA_PROTOCOL_SCHEMA, JA_PROTOCOL } from '@/admin-types/modules/JenkinsApplication.proto'
import { JA } from '@/admin-types/modules/JenkinsApplication'
import '@/style/view-style/table.scss'
import common from './common'
interface State {
  tableData: JA.JenkinsApplication[];
  modalDetailShow: boolean;
  modalAddEditShow: boolean;
  modalBuildShow: boolean;
  modalDistributeShow: boolean;
  columns: any;
  modalDetailData: JA.JenkinsApplication;
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
                console.log('编辑', item)
                this.setState({ modalAddEditShow: true }) // 先让form实例生成 防止 setFieldsValue 失败
                setTimeout(() => {
                  this.editAddFormRef.current?.setFieldsValue(item)
                })
              }}
            >编辑</Button>

            const buildBtn = <Button
              type="default"
              size="small"
              onClick={() => {
                console.log('构建')
                this.setState({ modalBuildShow: true })
                setTimeout(() => {
                  this.buildFormRef.current?.setFieldsValue({ projectId: item._id, projectName: item.projectName, branch: '' })
                })
              }}
            >构建</Button>

            const distributeBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log('分发')
                this.setState({ modalDistributeShow: true })
                setTimeout(() => {
                  this.distributeFormRef.current?.resetFields()
                })
              }}
            >分享权限</Button>

            const viewBuildBtn = <Button
              type="primary"
              size="small"
              onClick={() => {
                common.viewBuild(item.projectName)
              }}
            >查看构建</Button>

            // style={{ whiteSpace: 'nowrap' }}
            if (status === JA.JAStatus.APPLYING || status === JA.JAStatus.REAPPLYING) {
              buttons = (<span>{detailBtn}<Divider type="vertical"/>{editBtn}</span>)
            }
            if (status === JA.JAStatus.RECEIVE) {
              buttons = (<span>{detailBtn}</span>)
            }
            if (status === JA.JAStatus.SUCCESS) {
              buttons = (<span>{detailBtn}<Divider type="vertical"/>{distributeBtn}<br/><br style={{ lineHeight: '10px' }}/>{buildBtn}<Divider type="vertical"/>{viewBuildBtn}</span>)
            }
            if (status === JA.JAStatus.RETURN) {
              buttons = (<span>{detailBtn}<Divider type="vertical"/>{editBtn}</span>)
            }
            return buttons
          }
        }
      ],
      modalAddEditShow: false,
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
  buildFormRef = React.createRef<FormInstance<{ projectId: string, projectName: string; branch: string; }>>()
  distributeFormRef = React.createRef<FormInstance<{ userName: string }>>()

  componentDidMount () {
    this.getDataList({})
  }
  getDataList = async ({ projectName = '', status = 0 }: { projectName?: string; status?: JA.JAStatus }) => {
    const { JA_SEARCH } = JA_PROTOCOL
    const param: JA_PROTOCOL_SCHEMA.JA_SEARCH.REQUEST = { projectName: projectName || '' }
    if (status) param.status = status
    // const res = await axios.get(`${AdminJenkinsApplicationUrl}${JA_SEARCH.url}`, { params: param }) as JA_PROTOCOL_SCHEMA.JA_SEARCH.RESPONSE
    const res = await get(`${AdminJenkinsApplicationUrl}${JA_SEARCH.url}`, param, { token: true, loading: true, errorBizAction: 'message' }).catch(() => { /* 异常捕获 */ }) as JA_PROTOCOL_SCHEMA.JA_SEARCH.RESPONSE
    if (res && res.code === 200) {
      this.setState({ tableData: res.data.list })
    }
  }
  /** 项目创建-编辑 提交 */
  editAddFinish = async (values: JA.JenkinsApplication) => {
    console.log('val', values)
    if (values._id) {
      // 编辑
      return message.warn('编辑暂未实现')
    }
    const { JA_ADD } = JA_PROTOCOL
    const param: JA_PROTOCOL_SCHEMA.JA_ADD.REQUEST = values
    const res = await axios.post(`${AdminJenkinsApplicationUrl}${JA_ADD.url}`, param) as JA_PROTOCOL_SCHEMA.JA_ADD.RESPONSE
    if (res && res.code === 200) {
      this.editAddFormRef.current?.resetFields()
      this.setState({ modalAddEditShow: false })
      message.success('创建成功')
    } else {
      message.warn((res && res.message) || '创建失败..')
    }
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
    })
  }
  /** 项目构建 提交 */
  buildFinish = (values: any) => {
    console.log('val', values)
    const filedData = this.buildFormRef.current?.getFieldsValue()
    common.build(filedData?.projectId, filedData?.projectName, filedData?.branch)
    this.buildFormRef.current?.resetFields()
    this.setState({ modalBuildShow: false })
  }
  /** 搜索 提交 */
  searchFinish = (values: { projectName?: string, status?: JA.JAStatus }) => {
    console.log('val', values)
    this.getDataList(values)
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
              <h3 id="basic">我的应用</h3>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Form.Item>
                    <Button
                      icon={<PlusOutlined />}
                      danger
                      type="primary" color="green" onClick={() => {
                      this.editAddFormRef.current?.resetFields()
                      this.setState({ modalAddEditShow: true })
                    }}>
                      创建项目
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <Divider />
              <Table rowKey="_id" columns={columns} dataSource={this.state.tableData} />
            </div>
          </Col>
        </Row>
        {/* 添加-编辑 */}
        <Modal
          title="项目创建"
          centered
          visible={this.state.modalAddEditShow}
          onOk={() => {
            this.setState({ modalAddEditShow: false }) }}
          onCancel={() => { this.setState({ modalAddEditShow: false }) }}
          width={900}
        >
          <Form {...addEditFormItemLayout} ref={this.editAddFormRef} name="control-ref" onFinish={this.editAddFinish}>
            {/* 隐藏的id 用于判断是否是编辑状态 */}
            <Form.Item name="_id" label="项目id" hidden>
              <Input placeholder="项目id" />
            </Form.Item>
            <Form.Item name="projectName" label="项目名称" rules={[{ required: true }]} >
              <Input placeholder="请输入项目名称" />
            </Form.Item>
            <Form.Item name="orgName" label="项目组织">
              <AutoComplete
                options={common.orgListBeat}
                placeholder="请输入项目组织"
              />
            </Form.Item>
            <Form.Item name="priority" label="紧急程度">
              <Select placeholder="请选择紧急程度">
                {common.priorityList.map((item, ii) => (
                  <Select.Option key={ii + ''} value={item.value}>{item.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="repositoryURL" label="项目地址" rules={[{ required: true }]} >
              <Input placeholder="请输入项目地址" />
            </Form.Item>
            <Form.Item name="devDeployPath" label="dev部署路径" rules={[{ required: true }]} >
              <Input placeholder="请输入dev部署路径" />
            </Form.Item>
            <Form.Item name="masterDeployPath" label="idc部署路径" rules={[{ required: true }]} >
              <Input placeholder="请输入idc部署路径" />
            </Form.Item>
            <Form.Item name="description" label="项目描述" rules={[{ required: true }]} >
              <Input.TextArea placeholder="请输入项目描述" />
            </Form.Item>
            <Form.Item wrapperCol={{ xs: { span: 24, offset: 0, }, sm: { span: 16, offset: 8 } }}>
              <Button type="primary" htmlType="submit">
                提交
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
          onOk={() => {
            this.setState({ modalBuildShow: false })
          }}
          onCancel={() => { this.setState({ modalBuildShow: false }) }}
          width={600}
        >
          <Form {...addEditFormItemLayout} ref={this.buildFormRef} onFinish={this.buildFinish}>
            {/* hidden */}
            <Form.Item name="projectName" label="projectName" hidden >
              <Input placeholder="projectName" />
            </Form.Item>
            <Form.Item name="projectId" label="projectId" hidden >
              <Input placeholder="projectId" />
            </Form.Item>
            <Form.Item name="branch" label="选择环境-分支" rules={[{ required: true }]}>
              <Select placeholder="请选择部署环境" allowClear>
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

export default MineApplication
