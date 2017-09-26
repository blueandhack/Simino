'use strict'

const Mongoose = require('mongoose')
const SchemaTypes = Mongoose.SchemaTypes
const RecordSchema = new Mongoose.Schema({
  'userId': {
    type: SchemaTypes.String,
    require: true
  }
})

const RecordModel = Mongoose.model('Record', RecordSchema, 'records')

let Record = {
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
}


module.exports = Record
