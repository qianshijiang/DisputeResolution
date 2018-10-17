import {HOST} from './constants'
import {getToken} from './utils'

export default function(options = {}) {
  console.log(options)
  let {
    url = '',
    filePath = '',
    name = '',
    header = {},
    formData = {}
  } = options

  url = url.replace(/^\/+/, '')

  header['Content-Type'] = 'multipart/form-data'
  header['token'] = getToken()

  return new Promise((resolve, reject) => {
    wx.uploadFile({
      name,
      filePath,
      header,
      formData,
      url: `${HOST}${url}`,
      success: ({statusCode, data, errMsg}) => {
        if (statusCode === 200) {
          const res = JSON.parse(data)

          if (res.code === '200') {
            return resolve(res.result)
          }

          return reject(res)
        }

        reject(errMsg)
      },
      fail: reject
    })
  })
}
