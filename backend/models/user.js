'use strict'

let config = require('../config/index')

let OjectID = require('mongodb').ObjectID

const Mongoose = require('mongoose')

const SchemaTypes = Mongoose.SchemaTypes

const UserSchema = new Mongoose.Schema({
  'nickname': {
    type: SchemaTypes.String,
    required: true,
    maxLength: 100
  },
  'token': {
    type: SchemaTypes.String,
    required: true
  },
  'createdAt': {
    type: SchemaTypes.Number,
    required: true,
    validate: (timestamp) => (timestamp + '').length === 13,
    default: () => new Date().getTime()
  },
  'updatedAt': {
    type: SchemaTypes.Number,
    required: true,
    validate: (timestamp) => (timestamp + '').length === 13,
    default: () => new Date().getTime()
  }
})

const UserModel = Mongoose.model('User', UserSchema, 'users')

let User = {
  'createUser': (user) => {
    return new Promise(async (resolve, reject) => {
      const newUser = new UserModel(user)
      let result
      try {
        result = await newUser.save()
      } catch (error) {
        console.error(error)
        return reject(error)
      }
      resolve(result)
    })
  },
  'findUser': (query) => {
    return new Promise(async (resolve, reject) => {
      let user
      try {
        user = await UserModel.findOne(query).lean().exec()
      } catch (error) {
        console.error(error)
        return reject(error)
      }
      resolve(user)
    })
  },
  'updateUser': (query, doc) => {
    return new Promise(async (resolve, reject) => {
      let document = {
        $set: doc
      }
      let result
      try {
        result = await UserModel.findOneAndUpdate(query, document).lean().exec()
      } catch (error) {
        console.error(error)
        return reject(error)
      }
      resolve(result)
    })
  }
}

module.exports = User
