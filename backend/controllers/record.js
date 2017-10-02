'use strict'

const Record = require('../models/record')
const User = require('../models/user')
const Moment = require('moment')

let recordController = {
  'post': {
    'createRecord': async (req, res, next) => {
      const token = req.body.token
      const score = parseInt(req.body.score)
      let record, user
      try {
        user = await User.findUser({token: token})
      } catch (error) {
        console.error(error)
        return res.status(500).json({
          'code': 101,
          'message': '服务器内部错误',
          'result': {}
        })
      }
      if (!user) {
        return res.status(500).json({
          'code': 101,
          'message': '服务器内部错误',
          'result': {}
        })
      } else {
        try {
          record = await Record.createRecord({
            token: token,
            score: score,
            nickname: user.nickname
          })
        } catch (error) {
          console.log(error)
          return res.status(500).json({
            'code': 101,
            'message': '服务器内部错误',
            'result': {}
          })
        }
        return res.status(200).json({
          'code': 200,
          'message': '操作成功',
          'result': record
        })
      }
    }
  },
  'get': {
    'getTop': async (req, res, next) => {
      const query = {}
      let records
      try {
        records = await Record.findRecords(query)
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          'code': 101,
          'message': '服务器内部错误',
          'result': {}
        })
      }
      return res.status(200).json({
        'code': 200,
        'message': '操作成功',
        'result': records
      })
    }
  }
}

module.exports = recordController
