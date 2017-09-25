'use strict'

let express = require('express')
let router = express.Router()

const userController = require('../controllers/user')

router.post('/createUser', userController.post.createUser)

module.exports = router
