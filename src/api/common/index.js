import request from '@/utils/request'
import uploader from '@/utils/uploader'

/**
 * 获取地区数据
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getAreaData = (data) => {
  return request('/mobileInit/getArea', data)
}

/**
 * 获取纠纷类型数据
 * @return {promise}
 */
export const getDisputeTypes = () => {
  return request('/applet/common/getDisputeTypes')
}

/**
 * 获取默认调解机构类型数据
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getDefaultOrgData = () => {
  return request('/mobileLawCase/getOrgs')
}

/**
 * 获调解机构类型数据
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getOrgTypeData = (data) => {
  return request('/mobileLawCase/getOrgByType', data, null)
}

/**
 * 获取证据材料类型数据
 * @param  {Object} data 请求参数
 * @return {promise}
 */
export const getMaterialTypes = (data) => {
  return request('/mobileLawCase/getAttachmentTypes', data)
}

/**
 * 用户上传头像
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const uploadAvatar = (opts = {}) => {
  opts.url = '/mobileUser/updateHeadPortrait'

  return uploader(opts)
}
