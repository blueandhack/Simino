'use strict'

let config = {
  'app': {
    'name': 'Simino',
    'host': 'localhost',
    'port': 4000
  },

  'mongodb': {
    'simino': {
      'host': 'localhost',
      'port': 27017,
      'db': 'simino',
      'options': {
        'poolSize': 1,
        'useMongoClient': true
      }
    }
  },

  'statusCode': {
    '101': 'internal server',  // 服务器错误
    '102': 'connection failed',  // 连接失败
    '103': 'not found',  // 没找到资源
    '104': 'invalid json',  // 无效 JSON
    '105': 'incorrect type',  // 无效 类型
    '106': 'invalid token',  // Token 错误
    '107': 'lack of coins',  // 金币不足
    '108': 'operation forbidden',  // 操作被禁止
    '109': 'timeout',  // 超时
    '110': 'invalid phone number',  //  phone number
    '111': 'validation error',  // 验证失败
    '112': 'did not buy',  // 没有购买
    '113': 'invalid image data',  // 无效的图片 data
    '114': 'username missing',  // 缺少用户名
    '115': 'username taken',  // 用户名已经被占用
    '116': 'phone number taken',  // phone number 已经被占用,
    '117': 'invalid parameter',  // 参数错误
    '118': 'alipay missing',  // 缺少支付宝账号,
    '119': '认证失败或不存在认证记录',
    '120': '验证码错误',
    '121': 'code 错误',
    '122': '过期',

    '200': 'success'  // 请求成功
  }
}

config.mongodb.simino.url = 'mongodb://' + config.mongodb.simino.host + ':' + config.mongodb.simino.port + '/' + config.mongodb.simino.db

module.exports = config
