import get from 'lodash.get'
import jsCookies from 'js-cookie'
import protobuf from 'protobufjs'
import { Toast } from 'vant' // MessageBox
import protoRoot from '../proto/biz-proto/index'
import { getUUIDHeader, getSignatureHeader } from './signature'

function isArrayBuffer(obj) {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
}
/**
 * 请求体序列化
 * @param {string} requestType 请求体buf类型
 */
function transformRequestFactory(protoRoot, requestType) {
  /**
   * 请求参数序列化
   */
  return function transformResponse(rawData) {
    // 非空校验
    if (!rawData) {
      return rawData
    }
    try {
      const PBMessageData = protoRoot.lookup(requestType)
      var message = PBMessageData.create(rawData)
      var decodedDataBuffer = PBMessageData.encode(message).finish()
      console.log(PBMessageData.decode(decodedDataBuffer))
      return decodedDataBuffer
    } catch (err) {
      return err
    }
  }
}
/**
 * response反序列化
 * @param {string} responseType 返回值buf类型
 */
function transformResponseFactory(protoRoot, responseType) {
  return function transformResponse(rawResponse) {
    // 判断response是否是arrayBuffer
    if (rawResponse == null || !isArrayBuffer(rawResponse)) {
      return rawResponse
    }
    try {
      const buf = protobuf.util.newBuffer(rawResponse)
      // decode响应体
      const PBMessageResponse = protoRoot.lookup(responseType)
      const decodedResponse = PBMessageResponse.decode(buf)
      return decodedResponse
    } catch (err) {
      return err
    }
  }
}
/**
 * @param {*} msgType 接口名称
 * @param {*} requestBody 请求体参数
 * @param {*} responseType 返回值
 */
async function request(options = {}, config = {}) {
  const lookupTypePathResponse = get(config, 'PB_LOOK_TYPE_PATH_RESPONSE')
  const lookupTypePathRequest = get(config, 'PB_LOOK_TYPE_PATH_REQUEST')
  const tokenRequired = get(config, 'TOKEN_REQUIRED') // 暂不处理登陆事宜
  const errAction = get(config, 'ERROR_ACTION') // 异常处理
  // const protoModule = protoRoot // get(config, 'PROTO_MODULE') // 异常处理
  // const { default: protoRoot } = await protoRootMapper[protoModule]()
  const toast = message => errAction === 'toast' && Toast(message)
  const requestBody = transformRequestFactory(protoRoot, lookupTypePathRequest)(options.data || {})
  // console.log('.., proto requestBody', requestBody)
  const { url, method = 'GET', headers = {} } = options
  const localHeaders = {
    'Content-Type': 'application/x-protobuf'
    // 'Authorization': 'elIuFgmrgycjaZbD'
  }
  if (tokenRequired) {
    const token = jsCookies.get('token')
    localHeaders.Authorization = decodeURIComponent(token)
  }
  // 加密 request
  const uuidHeader = getUUIDHeader()
  localHeaders['X-authorize-uuid'] = uuidHeader
  localHeaders['Signature'] = getSignatureHeader(uuidHeader)
  console.log('requestBody', requestBody)
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        ...localHeaders,
        ...headers
      },
      body: requestBody
    })
      .then(res => {
        const { status: httpStatus } = res
        if (httpStatus === 200) {
          // arrayBuffer 转换
          return res.arrayBuffer()
        } else if (httpStatus === 401) {
          toast('请先登录')
          return undefined
          // return undefined
        } else {
          // 其他类型 http 异常
          toast('服务异常，请稍后重试~~')
          console.log('res', res)
          console.log('httpStatus', httpStatus)
          return undefined
        }
      })
      .catch(err => {
        console.warn(err)
        toast('网络异常~~')
        reject(new Error('网络异常~~'))
        throw new Error('网络异常~~')
      })
      .then(
        response => {
          if (!response) {
            // 其他类型 http 异常
            reject(new Error('服务异常，请稍后重试~~~'))
            return
          }
          try {
            const resObj = transformResponseFactory(protoRoot, lookupTypePathResponse)(response)
            const { errorMsg, errorCode } = resObj
            console.log('...... 反序列化', resObj)
            if (errorCode === 0) {
              resolve(resObj)
            } else {
              toast(errorMsg || '接口异常，请稍后重试~~')
              resolve(resObj)
            }
          } catch (e) {
            console.log('e', e)
            toast('序列化出错，请联系开发者~~')
            console.log('@@ 反序列化失败')
          }
        },
        err => {
          console.warn(err)
          toast('网络异常~~')
          throw new Error(err || '网络异常~~')
        }
      )
  })
}

export default request
