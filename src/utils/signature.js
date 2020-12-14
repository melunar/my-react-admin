import jsCookies from 'js-cookie'
import HmacSHA1 from 'hmacsha1'

// uuid
export const getUuid = function() {
  let s = []
  let hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  const _uuid = s.join('')
  return _uuid
}

// 10位当前时间戳加UUID
export const getUUIDHeader = function() {
  let _uuid = jsCookies.get('uuid')
  if (!_uuid) {
    _uuid = getUuid()
    jsCookies.set('uuid', _uuid)
  }
  return `${Math.floor(new Date().getTime() / 1000)}:${_uuid}`
}

// HmacSHA1密钥(不可改变 后端提供)
const publicKey = 'Rtg8BPKNEf2mB4mgvKONGPZZQSaJWNLijxR42qRgq0iBb5'

// 加密 signature Header
export const getSignatureHeader = function(uuidHeader = '') {
  const data = `${uuidHeader}:turingsenseai`
  const sha1ResHash = HmacSHA1(publicKey, data)
  return sha1ResHash
}
