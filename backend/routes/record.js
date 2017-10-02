'use strict'

let express = require('express')
let router = express.Router()

const recordController = require('../controllers/record')

router.post('/createRecord', recordController.post.createRecord)
router.get('/getTop', recordController.get.getTop)

module.exports = router
