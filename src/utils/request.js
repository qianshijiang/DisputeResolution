import wepy from 'wepy'
import {clearUserStorage} from './utils'

const codeMap = {
  '200': '成功',
  '500': '服务器发生未知错误',
  '205': '您还没有自己的数字签名',
  '200001': '超过7天,无法操作',
  '200002': '您不是当事人',
  '200003': '您不是申请人',
  '200004': '您不是被申请人',
  '200005': '您还没有进行实名认证',
  '200006': '该无争议事实双方都已经确认，无法再次确认',
  '200007': '该无争议事实您已经确认，无法再次确认',
  '200008': '该司法申请确认书都已经确认，无法再次确认',
  '200009': '该司法申请确认书您已经确认，无法再次确认',
  '200010': '该协议书都已经确认，无法再次确认',
  '200011': '该协议书您已经确认，无法再次确认',
  '200012': '用户不存在',
  '200013': '验证码还没有发送',
  '200014': '验证码错误',
  '200015': '两次密码输入不相同',
  '200016': '新密码和老密码相同',
  '200017': '申请人和被申请人号码一致，无法创建',
  '200018': '案件不存在',
  '200019': '当事人中没有登陆人，无法创建',
  '200020': '申请方拥有被申请方的信息，无法创建',
  '200021': '您是代理人，没有权限执行该操作',
  '200022': '信息填写不完整，请检查',
  '200023': '申请方的信息与实名认证的信息不符，请检查',
  '200024': '不存在合适的调解机构，请主动选择',
  '200025': '该手机号用户已注册',
  '200026': '您不是申请人代理人',
  '200027': '您不是被申请人代理人',
  '999999': '填入信息不满足要求'
}

const toast = msg => {
  wx.showToast({title: msg, icon: 'none', duration: 3e3})
}

const promiseToast = (m, handler) => {
  return new Promise((resolve, reject) => {
    let promise

    if (typeof handler === 'function') {
      promise = handler(m)
    }

    if (promise && typeof promise.then === 'function') {
      return promise.then(resolve).catch(reject)
    }

    if (promise === false) {
      return reject(promise)
    }

    resolve(promise)
  })
}

/**
 * 统一请求接口处理
 * @params {String} url 接口地址
 * @params {object} data 请求参数
 * @params {boolean} modal 是否弹窗提示。弹窗: true, 吐司: false
 * @returns {*|Promise<T>}
 */
export default function(url, data, handler = toast, header) {
  return wepy.request({
    data,
    header,
    url: url
  })
  .catch((data = {}) => {
    if (data.code) {
      let msg = data.message

      switch (data.code) {
      case 'JWT00001':
      case 'JWT00002':
      case 'JWT00004':
      case '401':
      case '402':
      case '403':
      case '404':
        clearUserStorage()
        msg = '登录已过期，请重新登录'
        promiseToast(msg, handler).then(() => {
          // eslint-disable-next-line
          let currentPage = getCurrentPages().pop()

          if (currentPage.route !== 'pages/sign/signin') {
            wx.navigateTo({url: '/pages/sign/signin?back=1'})
          }
        })
        return Promise.reject(data)
      }

      if (data.code in codeMap) {
        msg = codeMap[data.code]
      }

      promiseToast(msg, handler)
    }

    return Promise.reject(data)
  })
}
