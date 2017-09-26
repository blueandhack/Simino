'use strict'

const Moment = require('moment')
const User = require('../models/user')

let userController = {
  'post': {
    'createUser': async (req, res, next) => {
      const nickname = req.body.nickname
      const token = req.body.token
      let user
      try {
        user = await User.findUser({phoneNumber: phoneNumber})
      } catch (error) {
        console.error(error)
        return res.status(500).json({
          'code': 101,
          'message': '服务器内部错误',
          'result': {}
        })
      }
      if (user) {
        return res.status(500).json({
          'code': 101,
          'message': '用户存在',
          'result': {}
        })
      } else {
        try {
          user = await User.createUser({
            token: token,
            nickname: nickname
          })
        } catch (error) {
          console.log(error)
          return res.status(500).json({
            'code': 101,
            'message': '服务器内部错误',
            'result': {}
          })
        }
      }
      return res.status(200).json({
        'code': 200,
        'message': '操作成功',
        'result': user
      })
    }
  }
}

module.exports = userController
