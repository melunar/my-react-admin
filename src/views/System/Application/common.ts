import { JA } from '@/admin-types/modules/JenkinsApplication.d'

const statusNameMapper: { [key: number]: string } = { [JA.JAStatus.APPLYING]: '申请中', [JA.JAStatus.REAPPLYING]: '再次申请中', [JA.JAStatus.RECEIVE]: '接受申请', [JA.JAStatus.RETURN]: '打回', [JA.JAStatus.SUCCESS]: '成功/可用'}
const priorityNameMapper: { [key: number]: string } = { [JA.JAExigencyStatus.EXIGENCY]: '加急', [JA.JAExigencyStatus.SO_SO]: '普通', [JA.JAExigencyStatus.UNKNOW]: '未知', [JA.JAExigencyStatus.TEST]: '测试' }

const instance = {
  statusNameMapper,
  priorityNameMapper,
}

export default instance