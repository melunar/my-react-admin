import axios from 'axios'
import { message, Modal } from 'antd'
import store from '@/store'
import { HIDDEN_LOADING, SHOW_LOADING } from '@/store/actionType'
import { clearUserLocalData } from '@/utils'
import { ResponseOptions } from '@/admin-types/global/ResponseOptions'
import { ResponseCodeEnum } from '@/admin-types/common/ResponseCodeEnum'

const instance = axios.create({
  timeout: 10000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios 请求拦截器
instance.interceptors.request.use(
  config => {
    // 将 token 添加到请求头
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// axios 响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      console.log('interceptors response data ====> ', response.data)
      return Promise.resolve(response.data)
    } else {
      // 网络异常
      return Promise.reject(response)
    }
  },
  error => {
    // 网络错误
    // reject 出去 让 instance catch 捕获到
    return Promise.reject(error)
  }
)

/** 默认config */
const defaultCustomConfig: CustomAxiosConfig = { //
  token: true,
  loading: false,
  mock: false,
  errorBizAction: 'message'
}

/** 错误处理 */
const showErrorMessage = (errorMessage: string = '出错! 请稍后重试', action?: 'message' | 'alert' | '') => {
  if (action === 'message') {
    return message.warn(errorMessage)
  } else if (action === 'alert') {
    return Modal.warn({content: errorMessage})
  }
}

/** loading */
const showLoading = () => {
  store.dispatch({ type: SHOW_LOADING })
}
/** hide loading */
const hideLoading = () => {
  store.dispatch({ type: HIDDEN_LOADING })
}

/** 登陆 */
const showErrorAndLogin = (errorMessage: string) => {
  showErrorMessage(errorMessage, 'message')
  setTimeout(() => {
    clearUserLocalData()
    window.location.replace(
      `${window.location.origin}/#/login?cmd=login&referer=${encodeURIComponent(window.location.href)}`
    )
  }, 1200)
}

/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param {url} 请求地址
 * @param {params} 请求参数
 * @param {config} 请求配置，针对当前本次请求；CustomAxiosConfig
 */
function request(url: string, params: object, config: CustomAxiosConfig, method: 'get' | 'post') {
  config = Object.assign(defaultCustomConfig, config)
  const { loading = true, mock = false, errorBizAction = '' } = config
  // 全局 loading
  loading && showLoading()
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求使用params字段
    if (method === 'get') data = { params }
    // post请求使用data字段
    if (method === 'post') data = { data: params }
    // 通过mock平台可对局部接口进行mock设置
    if (mock) {
      // todo
      // url = 'http://www.mock.com/mock/xxxx/api'
    }
    instance({
      url,
      method,
      ...data
    })
      .then((res: any) => {
        res = Object.assign({}, res)
        const { code, message } = (res as ResponseOptions<any>)
        if (code === ResponseCodeEnum.SUCCESS) {
          resolve(res)
        } else if ([401].includes(code)) {
          showErrorAndLogin('用户未认证')
        } else if ([402].includes(code)) {
          showErrorAndLogin('无效用户认证')
        } else if ([403].includes(code)) {
          showErrorAndLogin('用户认证过期')
        } else if ([405].includes(code)) {
          showErrorAndLogin('没有权限操作')
        } else {
          showErrorMessage(message, errorBizAction)
          resolve(res)
        }
      })
      .catch(error => {
        // 网络错误
        message.error('[网络异常，请稍后再试]')
        loading && hideLoading()
        return reject(error)
      })
      .finally(() => {
        loading && hideLoading()
      })
  })
}
/** GET请求 */
export function get (url: string, params: object, config?: CustomAxiosConfig) {
  return request(url, params, config || {}, 'get')
}
/** POST请求 */
export function post (url: string, params: object, config?: CustomAxiosConfig) {
  return request(url, params, config || {}, 'post')
}

export default instance
