import { JA } from '@/admin-types/modules/JenkinsApplication.d'

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
  { value: 'origin/master', name: 'IDC' },
]


const instance = {
  statusNameMapper,
  priorityNameMapper,
  priorityList,
  orgListBeat,
  branchList,
  statusList
}

export default instance