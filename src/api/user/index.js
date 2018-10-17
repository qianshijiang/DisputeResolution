import request from '@/utils/request'
import uploader from '@/utils/uploader'

// const alert = m => wx.showModal({content: m, showCancel: false})

/**
 *获取用户信息
 * @return {promise}
 */
export const getSelfUser = (data) => {
  return request('/mobileUser/getSelfUser', data, false)
}

/**
 * 更换绑定手机
 * @return {promise}
 */
export const updatePhone = (data) => {
  return request('/mobileUser/updatePhone', data)
}

/**
 * 更换绑定手机
 * @return {promise}
 */
export const updateEmail = (data) => {
  return request('/applet/user/updateEmail', data)
}

/**
 * 更新用户信息
 * @return {promise}
 */
export const updateSelfUser = (data) => {
  return request('/mobileUser/updateSelfUser', data, null)
}

/**
 * 上传头像
 * @return {promise}
 */
export const updateHeadPortrait = (data) => {
  return request('/mobileUser/updateHeadPortrait', data)
}

/**
 * 获取调解案件列表
 * @return {promise}
 */
export const getLawCases = (data) => {
  return request('/mobileLawCase/getLawCases', data)
}

/**
 * 获取调解案件详情
 * @return {promise}
 */
export const getCase = (data) => {
  return request('/mobileLawCase/getCase', data, null)
}

/**
 * 获取纠纷案件详情
 * @return {promise}
 */
export const getLawCaseDetail = (data) => {
  return request('/mobileLawCase/getLawCaseDetail', data)
}

/**
 * 获取调解案件当事人
 * @return {promise}
 */
export const getUser = (data) => {
  return request('/mobileUser/getUser', data)
}
/**
 * 获取咨询案件列表
 * @return {promise}
 */
export const getDisputes = (data) => {
  return request('/mobileConsult/getDisputesList', data)
}

/**
 * 人脸认证结果接口
 * @return {promise}
 */
export const faceRecognition = (data) => {
  return request('/applet/user/faceRecognition', data)
}

/**
 * 上传身份证图片
 * @return {promise}
 */
export const faceImg = (opts = {}) => {
  opts.url = '/mobile/user/idcard/uploadIDCard'

  return uploader(opts)
}

/**
 * 为登陆时上传身份证图片
 * @return {promise}
 */
export const facenImg = (opts = {}) => {
  opts.url = '/mobile/user/idcard/uploadSweepIdCard'

  return uploader(opts)
}

/**
 * 获取咨询师列表
 * @return {promise}
 */
export const getCounselors = (data) => {
  return request('/mobileConsult/getCounselors', data)
}

/**
 * 获取调解案件进度
 * @return {promise}
 */
export const getLawCaseProgress = (data) => {
  return request('/mobileLawCase/getLawCaseProgress', data)
}
/**
 * 获取单个咨询师信息
 * @return {promise}
 */
export const getCounselor = (data) => {
  return request('/mobileConsult/getCounselor', data)
}
/**
 * 评价咨询师
 * @return {promise}
 */
export const submitComment = (data) => {
  return request('/mobileConsult/submitComments', data)
}

/**
 * 获取评估列表
 * @return {promise}
 */
export const getList = (data) => {
  return request('/mobileEvaluate/getList', data)
}

/**
 * 获取评估列表
 * @return {promise}
 */
export const applicationAssessment = (data) => {
  return request('/mobileEvaluate/applicationAssessment', data)
}

/**
 * 获取评估列表
 * @return {promise}
 */
export const getDesc = (data) => {
  return request('/mobileEvaluate/getDesc', data)
}
