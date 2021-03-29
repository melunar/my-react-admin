import { JA } from '@/admin-types/modules/JenkinsApplication'
import axios, { post } from '@/api'
import { AdminJenkinsApplicationUrl } from '@/api/config'
import { JA_PROTOCOL_SCHEMA, JA_PROTOCOL } from '@/admin-types/modules/JenkinsApplication.proto'

const statusNameMapper: { [key: number]: string } = { [JA.JAStatus.APPLYING]: '申请中', [JA.JAStatus.REAPPLYING]: '再次申请中', [JA.JAStatus.RECEIVE]: '接受申请', [JA.JAStatus.RETURN]: '打回', [JA.JAStatus.SUCCESS]: '成功/可用'}
const priorityNameMapper: { [key: number]: string } = { [JA.JAExigencyStatus.EXIGENCY]: '加急', [JA.JAExigencyStatus.SO_SO]: '普通', [JA.JAExigencyStatus.UNKNOW]: '未知', [JA.JAExigencyStatus.TEST]: '测试' }
const orgListBeat: { value: string }[] = [
  { value: 'Toc' },
  { value: 'KA' },
  { value: 'SMB' },
  { value: 'Other'}
]

const statusList = [
  { value: JA.JAStatus.APPLYING, name: statusNameMapper[JA.JAStatus.APPLYING] },
  { value: JA.JAStatus.REAPPLYING, name: statusNameMapper[JA.JAStatus.REAPPLYING] },
  { value: JA.JAStatus.RECEIVE, name: statusNameMapper[JA.JAStatus.RECEIVE] },
  { value: JA.JAStatus.RETURN, name: statusNameMapper[JA.JAStatus.RETURN] },
  { value: JA.JAStatus.SUCCESS, name: statusNameMapper[JA.JAStatus.SUCCESS] },
]
const priorityList = [
  { value: JA.JAExigencyStatus.UNKNOW, name: priorityNameMapper[JA.JAExigencyStatus.UNKNOW] },
  { value: JA.JAExigencyStatus.TEST, name: priorityNameMapper[JA.JAExigencyStatus.TEST] },
  { value: JA.JAExigencyStatus.SO_SO, name: priorityNameMapper[JA.JAExigencyStatus.SO_SO] },
  { value: JA.JAExigencyStatus.EXIGENCY, name: priorityNameMapper[JA.JAExigencyStatus.EXIGENCY] },
]

const branchList = [
  { value: 'origin/dev', name: 'DEV' },
  { value: 'origin/master', name: 'MASTER' },
]

/**
 * 触发Jenkins构建
 */
const build = async (projectId: string | undefined, projectName: string | undefined, branch: string | undefined) => {
  // todo 这里跨域了 移到后端去
  // const _res = 
  await post(`${AdminJenkinsApplicationUrl}${JA_PROTOCOL.JA_BUILD.url}`, {
    projectName,
    branch,
    remark: 'DST平台构建',
    projectId
  } as JA_PROTOCOL_SCHEMA.JA_BUILD.REQUEST, { token: true, loading: true, errorBizAction: 'message' }).catch(() => { /* 异常捕获 */ }) as JA_PROTOCOL_SCHEMA.JA_BUILD.RESPONSE
  // axios.get(`http://121.37.158.0:8080/job/${projectName}/buildWithParameters?token=vue3-mall-structure-token&branch=${branch}&remark=暂无`)
  // http://121.37.158.0:8080/job/vue3-mall/buildWithParameters?token=vue3-mall-structure-token&branch=origin/dev&remark=%E6%9A%82%E6%97%A0
  // http://121.37.158.0:8080/job/vue3_mall/buildWithParameters?token=vue3-mall-structure-token&branch=origin/dev&remark=api构建备注dev环境
}
/**
 * 查看Jenkins构建
 * @param projectName 项目名
 */
const viewBuild = (projectName: string | undefined) => {
  window.open(`http://121.37.158.0:8080/job/${projectName}`)
}

const testData: JA.JenkinsApplication[] = [{
  projectName: '咸鱼H5',
  applyTime: new Date().getTime() - 6000000,
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


const instance = {
  statusNameMapper,
  priorityNameMapper,
  priorityList,
  orgListBeat,
  branchList,
  statusList,
  build,
  viewBuild,
  testData
}

export default instance