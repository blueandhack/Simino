'use strict'

const productionEnv = require('./production')
const developmentEnv = require('./development')
const testingEnv = require('./testing')

const NODE_ENV = process.env.NODE_ENV

function generateConfig (NODE_ENV) {
  if (NODE_ENV === 'production') {
    return productionEnv
  } else if (NODE_ENV === 'development') {
    return developmentEnv
  } else if (NODE_ENV === 'testing') {
    return testingEnv
  } else {
    console.error('"NODE_ENV" environment variable not set')
    process.exit(1)
  }
}

module.exports = generateConfig(NODE_ENV)
