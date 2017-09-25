'use strict'

const Mongoose = require('mongoose')
const SchemTypes = Mongoose.SchemaTypes
const RecordSchema = new Mongoose.Schema({
  'userId':{
    type: SchemTypes.String,
    require: true
  }
})

const RecordModel = Mongoose.model('Record', RecordSchema, 'records')

let Record = {

}

module.exports = Record
