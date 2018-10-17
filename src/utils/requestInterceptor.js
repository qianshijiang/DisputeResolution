import {HOST} from './constants'
import {getToken, saveToken} from './utils'

export default {
  config(opts = {}) {
    let {
      url = '',
      data = {},
      header = {},
      method = 'post'
    } = opts

    url = url.replace(/^\//, '')

    // 如果没有定义请求头的content-type，则默认为 application/json
    if (!Object.keys(header).some(key => key.toLowerCase() === 'content-type')) {
      // header['Content-Type'] = 'application/x-www-form-urlencoded'
      header['Content-Type'] = 'application/json'
    }

    // 若有token，则将token添加到请求头
    const token = getToken()
    if (token) {
      header['token'] = token
    }

    return {...opts, data, header, method, url: `${HOST}${url}`}
  },
  success(res) {
    const {data = {}} = res

    // console.log(res)
    const token = data['token']
    if (token) {
      saveToken(token)
    }

    if (data.code === '200' || data.code === 200) {
      return data.result
    }

    return Promise.reject(data)
  },
  fail(e) {
    console.log('error: %o', e)
    return e
  }
}
