import request from '@/utils/request'
import uploader from '@/utils/uploader'

// 弹窗提示
const alert = m => wx.showModal({content: m, showCancel: false})

// 吐司提示
const toast = m => wx.showToast({title: m, icon: 'none', duration: 3e3})

/**
 * 获取首页数据
 * @return {promise}
 */
export const getHomeData = (data, handler = toast) => {
  return request('/mobileLogin/home', data, handler)
}

/**
 * 获取个人视频总数
 * @return {promise}
 */
export const getTvList = (data, handler = toast) => {
  return request('/mobileLawMeetting/getReservationVideoCount', data, handler)
}

/**
 * 首页服务资源统计
 */
export const getResourceCount = () => {
  return request('/applet/index/countCMAC')
}

/**
 * 获取常见问题
 * @return {promise}
 */
export const getConsult = () => {
  return request('/mobileConsult/getCommonProblem')
}

/**
 * 新建人工咨询
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const saveDisputes = (data) => {
  return request('/mobileConsult/saveDisputes', data, alert)
}

/**
 * 评估
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const assessment = (data) => {
  return request('/mobileEvaluate/save', data)
}
// /mobileEvaluate/save
/**
 * 上传证据材料
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const uploadAttachmentForInsert = (opts = {}) => {
  opts.url = 'applet/consult/uploadAttachmentForInsert'

  return uploader(opts)
}
