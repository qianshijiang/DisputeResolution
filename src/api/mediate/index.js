import request from '@/utils/request'
import uploader from '@/utils/uploader'

/**
 * 调解相关接口
 */

// 弹窗提示
const alert = (m) => {
  wx.showModal({content: m, showCancel: false})
}

/**
 * 新建调解
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitMediate = (data) => {
  return request('/mobileLawCase/insertLawCase', data, alert)
}

/**
 * 获取证据材料
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getAttachments = (data) => {
  return request('/mobileLawCase/getLawCaseAttachmes', data, alert)
}

/**
 * 上传证据材料
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const uploadAttachment = (opts = {}) => {
  opts.url = '/mobileLawCase/uploadAttachment'

  return uploader(opts)
}

/**
 * 进入会议房间
 * @param  {Object} data 请求参数
 * @param  {Function} errHandler 错误处理
 * @return {promise}
 */
export const getMeetingData = (data, errHandler = alert) => {
  return request('/mobileLawMeetting/enterWechatRTC', data, errHandler)
}

/**
 * 邀请观摩
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const sendViewCode = (data) => {
  return request('/mobile/cam/lawMeeting/sendViewCode', data)
}

/**
 * 发送文字消息
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const sendMessage = (data, errHandler) => {
  return request('/mobileLawMeetting/saveMobileMessage', data, errHandler)
}

/**
 * 获取文字消息
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getMessage = (data) => {
  return request('/mobileLawMeetting/getMessage', data)
}

/**
 * 获取文书actionSheetItem
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const documentItemList = (data) => {
  return request('/mobileLawCase/documentSignatureStatus', data)
}

/**
 * 获取历史消息
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getHistoryMsg = (data) => {
  return request('/mobileLawMeetting/getMessages', data)
}

/**
 * 获取私聊历史消息
 * @param  {Object} data 请求参数
 * @return {Promise}
 */
export const getPriHistorymsg = (data) => {
  return request('/mobileLawMeetting/getPriMsgs', data)
}

/**
 * 获取私聊消息详情
 * @param  {Object} data 请求参数
 * @return {Promise}
 */
export const getPriMsg = (data) => {
  return request('/mobileLawMeetting/getPriChatMsg', data)
}

/**
 * 保存私聊消息
 * @param  {Object} data 请求参数
 * @return {Promise}
 */
export const savePriMsg = (data) => {
  return request('/mobileLawMeetting/saveMobilePriMsg', data)
}

/**
 * 获取调解笔录
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getAdjustRecord = (data) => {
  return request('/mobileLawCase/getAdjustRecordAndSignature', data, alert)
}

/**
 * 获取调解协议
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getMediationBook = (data) => {
  return request('/mobileLawCase/getMediationBookAndSignature', data, alert)
}

/**
 * 获取司法确认申请书
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getLawJudgleBook = (data) => {
  return request('/mobileLawCase/getLawJudgleBookAndSignature', data, alert)
}

/**
 * 获取无争议事实书
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getDisputeFact = (data) => {
  return request('/mobileLawCase/getLawNoDisputeFactAndSignature', data, alert)
}

/**
 * 获取无异议调解方案
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getMediationPlan = (data) => {
  return request('/mobileLawCase/getMediationProgrem', data, alert)
}

/**
 * 获取承诺书
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getPromiseBook = (data) => {
  return request('/mobileLawCase/getPromise', data, alert)
}

/**
 * 获取调解申请书信息
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getDocument = (data) => {
  return request('/mobileLawCase/getAppMediationBook', data)
}

/**
 * 获取异议书
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getDissentBook = (data) => {
  return request('/mobileLawCase/getDissent', data, alert)
}

/**
 * 笔录确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendRecordBook = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmRecordBySignature'

  return uploader(opts)
}

/**
 * 协议书确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendMediationBook = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmMediationBookBySignature'

  return uploader(opts)
}

/**
 * 司法确认申请书确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendLawJudleBook = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmLawJudgleBookBySignature'

  return uploader(opts)
}

/**
 * 无争议事实书确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendDisputeFact = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmLawNoDisputeFactBySignature'

  return uploader(opts)
}

/**
 * 承诺书确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendPromiseBook = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmPromiseBySignature'

  return uploader(opts)
}

/**
 * 异议书确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendDissentBook = (opts = {}) => {
  opts.url = '/mobileLawCase/sendDissentBySignature'

  return uploader(opts)
}

/**
 * 无异议调解方案确认-签名上传
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendMediatePlan = (opts = {}) => {
  opts.url = '/mobileLawCase/confirmLawMschemeBySignature'

  return uploader(opts)
}

const header = {'Content-Type': 'application/x-www-form-urlencoded'}
// const header = {'Content-Type': 'multipart/form-data'}

/**
 * 笔录拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitRecordBook = (data) => {
  return request('/mobileLawCase/confirmRecordBySignature', data, alert, header)
}

/**
 * 协议书拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitMediationBook = (data) => {
  return request('/mobileLawCase/confirmMediationBookBySignature', data, alert, header)
}

/**
 * 司法确认申请书拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitLawJudleBook = (data) => {
  return request('/mobileLawCase/confirmLawJudgleBookBySignature', data, alert, header)
}

/**
 * 无争议事实书拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitDisputeFact = (data) => {
  return request('/mobileLawCase/confirmLawNoDisputeFactBySignature', data, alert, header)
}

/**
 * 承诺书拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitPromiseBook = (data) => {
  return request('/mobileLawCase/confirmPromiseBySignature', data, alert, header)
}

/**
 * 异议书拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitDissentBook = (data) => {
  return request('/mobileLawCase/sendDissentBySignature', data, alert, header)
}

/**
 * 无异议调解方案拒绝
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const submitMediatePlan = (data) => {
  return request('/mobileLawCase/confirmLawMschemeBySignature', data, alert, header)
}

/**
 * 其他平台签名
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const sendPlatformBook = (opts = {}) => {
  opts.url = '/applet/pc/confirmDocument'

  return uploader(opts)
}
