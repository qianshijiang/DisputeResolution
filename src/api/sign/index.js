import request from '@/utils/request'

const alert = m => wx.showModal({content: m, showCancel: false})

/**
 * 用户登录
 * @return {promise}
 */
export const userSignin = (data) => {
  /**
   * @params {String} url 接口地址
   * @params {object} data 请求参数
   * @params {boolean} mdal 是否弹窗提示。弹窗: true, 吐司: false
   */
  return request('/mobileLogin/login', data, alert)
}

export const codeSignin = (data) => {
  /**
   * @params {String} url 接口地址
   * @params {object} data 请求参数
   * @params {boolean} mdal 是否弹窗提示。弹窗: true, 吐司: false
   */
  return request('/mobile/cam/lawMeeting/assistlogin', data, alert)
}

/**
 * 身份证登录
 * @return {promise}
 */
export const ctzenSignin = (data) => {
  /**
   * @params {String} url 接口地址
   * @params {object} data 请求参数
   * @params {boolean} mdal 是否弹窗提示。弹窗: true, 吐司: false
   */
  return request('/mobile/user/sivlogin/login', data, alert)
}
/**
 * 获取短信验证码
 * @return {promise}
 */
export const getVerifyCode = (data) => {
  return request('/mobileUser/getVerifyCode', data, alert)
}

/**
 * 用户注册
 * @return {promise}
 */
export const userSignup = (data) => {
  return request('/mobileUser/registeredUser', data, alert)
}

/**
 * 实名认证
 * @return {promise}
 */
export const verifyUser = (data) => {
  return request('/mobileUser/verifyUser', data, null)
}

/**
 * 更换绑定手机
 * @return {promise}
 */
export const updatePhone = (data) => {
  return request('/mobileUser/updatePhone', data, alert)
}

/**
 * 检测手机号 是否存在
 * @return {promise}
 */
export const checkUserIsRegister = (data) => {
  return request('/mobileUser/checkUserIsRegister', data, null)
}
/**
 * 检测验证码正确
 * @return {promise}
 */
export const checkVerifyCode = (data) => {
  return request('/applet/user/checkVerifyCode', data, alert)
}

/**
 * 忘记密码
 * @return {promise}
 */
export const resetPassword = (data) => {
  return request('/applet/user/resetPassword', data, alert)
}
/**
 * 获取事件数量 本次调用用于检测 token 是否过期
 * @return {promise}
 */
export const getHomeData = (data) => {
  return request('/mobileLogin/home', data, null)
}
