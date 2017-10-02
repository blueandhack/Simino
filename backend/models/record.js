'use strict'

const Mongoose = require('mongoose')
const SchemaTypes = Mongoose.SchemaTypes
const RecordSchema = new Mongoose.Schema({
  'score': {
    type: SchemaTypes.Number,
    require: true
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
  }
})

const RecordModel = Mongoose.model('Record', RecordSchema, 'records')

let Record = {
  'createRecord': (record) => {
    return new Promise(async (resolve, reject) => {
      const newRecord = new RecordModel(record)
      let result
      try {
        result = await newRecord.save()
      } catch (error) {
        console.error(error)
        return reject(error)
      }
      resolve(result)
    })
  },
  'findRecord': (query) => {
    return new Promise(async (resolve, reject) => {
      let record
      try {
        record = await RecordModel.find(query).lean().exec()
      } catch (error) {
        console.error(error)
        reject(error)
      }
      resolve(record)
    })
  }
}

module.exports = Record
