import axios from 'axios'
import { message } from 'antd'

// 两种封装方案: https://zhuanlan.zhihu.com/p/136035219

// 这里取决于登录的时候将 token 存储在哪里
// const token = localStorage.getItem('token')

const instance = axios.create({
  timeout: 10000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios 添加请求拦截器
instance.interceptors.request.use(
  config => {
    debugger
    // 将 token 添加到请求头
    config.needToken && (config.headers.Authorization = localStorage.getItem('token'))
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      console.log('====> ', response.data)
      return Promise.resolve(response.data)
    } else {
      // 相应错误处理
      // 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
      // switch (error.response.status) {
        // case 401:
        //   break
        // case 403:
        //   break
        // case 404:
        //   break
        // case 500:
        //   break
        // default:
        // console.log('其他错误信息')
      // }
      // return Promise.reject(response)
    }
  },
  error => {
    // 相应错误处理
    // 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
    // switch (error.response.status) {
    //   case 401:
    //     break
    //   case 403:
    //     break
    //   case 404:
    //     break
    //   case 500:
    //     break
    //   default:
    //     console.log('其他错误信息')
    // }
    message.error('[网络异常，请稍后再试]')
    return Promise.reject(error)
  }
)

export default instance
