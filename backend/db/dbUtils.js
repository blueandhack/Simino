const config = require('../config/index')
const MONGODB_URL = config.mongodb.simino.url
const MONGODB_OPTIONS = config.mongodb.simino.options
const Mongoose = require('mongoose')
Mongoose.Promise = Promise

let _db
const resolves = []
module.exports = {
  connectDb: (cb) => {
    Mongoose.connect(MONGODB_URL, MONGODB_OPTIONS, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('assign db connectionssss')
      _db = Mongoose.connection
      if (cb) cb()
      resolves.forEach(resolve => {
        resolve(_db)
      })
    })
  },
  getDb: () => {
    return _db
  },
  waitingForDb: () => {
    return new Promise((resolve, reject) => {
      if (_db) {
        return resolve(_db)
      } else {
        resolves.push(resolve)
      }
    })
  }
}
