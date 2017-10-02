'use strict'

let express = require('express')
let router = express.Router()

const recordController = require('../controllers/record')

router.post('createRecord', recordController.post.createRecord)

module.exports = router
