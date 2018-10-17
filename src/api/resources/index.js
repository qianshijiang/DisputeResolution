import request from '@/utils/request'

/**
 * 获取咨询师列表以及调解员列表
 * @return {promise}
 */
export const getCounselorAndMediators = (data) => {
  return request('/applet/index/getCounselorAndMediators', data)
}
/**
 * 获取 法院 和 调解机构列表
 * @return {promise}
 */
export const getOrgs = (data) => {
  return request('/applet/index/getOrgs', data)
}

/**
 * 修改密码
 * @return {promise}
 */
export const updatePassword = (data) => {
  return request('/mobileUser/updatePassword', data)
}
