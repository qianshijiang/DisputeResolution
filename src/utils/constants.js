// 开发环境
/* @if ENV='dev' **
var HOST = exports.HOST = 'https://yunjf.gov.cn/' // 接口地址
var H5URL = exports.H5URL = 'https://www.epan123.com' // 接口地址

var SOCKET_URL = exports.SOCKET_URL = 'wss://yunjf.gov.cn/' // socket 地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'YDRPxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://robot.odrcloud.cn/' // 接口地址

var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://robot.odrcloud.cn/websocket'   //智能咨询socket地址
/* @endif */

// 测试环境
/* @if ENV='test' **
var HOST = exports.HOST = 'https://test.yunjf.gov.cn/' // 接口地址
var H5URL = exports.H5URL = 'https://www.epan123.com' // 接口地址

var SOCKET_URL = exports.SOCKET_URL = 'wss://test.yunjf.gov.cn/' // socket 地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'YDRPxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://robot.odrcloud.cn/' // 接口地址

var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://robot.odrcloud.cn/websocket'   //智能咨询socket地址
/* @endif  */

// 生产环境
/* @if ENV='prod' **
var HOST = exports.HOST = 'https://yunjf.yn.gov.cn/' // 接口地址
var H5URL = exports.H5URL = 'https://zlpg.epan123.com' // 接口地址

var SOCKET_URL = exports.SOCKET_URL = 'wss://yunjf.yn.gov.cn/' // socket 地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'YDRTxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://robot.odrcloud.cn/' // 接口地址
var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://robot.odrcloud.cn/websocket'   //智能咨询socket地址

/* @endif */

// 上传文件最大尺寸 单位：B
export const FILE_MAX_SIZE = 10 * 1024 * 1024

// 用户缓存的key
export const KEYS = {
  // 存取token的key
  TOKEN_KEY: 'token',
  // 存储视频会议数据的key
  LIVEDATA_KEY: 'liveData',
  // 存取用户信息的key
  USER_INFO_KEY: 'userInfo',
  // 存储微信用户信息key
  WX_USER_INFO_KEY: 'wxUserInfo'
}
