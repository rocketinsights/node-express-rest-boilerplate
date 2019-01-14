// FIXME initialize your database here
// See branches of repo for different skeletons for differing datasources

const mongoose = require('mongoose')
const logging = require('../logging')
const Promise = require('bluebird')

const connect = async () => {
  const connectUri = process.env.DATABASE_CONNECTION_STRING
  const user = process.env.DATABASE_USER
  const pass = process.env.DATABASE_PASSWORD

  if (!connectUri || !user || !pass) {
    logging.log(
      'fatal',
      'DATABASE_CONNECTION_STRING, DATABASE_USER and DATABASE_PASSWORD env vars must be set'
    )
    process.exit(1)
  }

  mongoose.Promise = Promise
  let connectOptions = {
    // TODO set more appropriate pooling options
    reconnectInterval: 3000,
    reconnectTries: 9,
    poolSize: process.env.DATABASE_MAX_POOL_SIZE || 5
  }
  logging.log(
    'info',
    'Connecting to mongoose database %s and options %o ...',
    connectUri,
    connectOptions
  )
  // add these in after so we can safely log connect configurations
  connectOptions.user = user
  connectOptions.pass = pass
  await mongoose.connect(
    connectUri,
    connectOptions
  )

  logging.log('info', 'Connected to mongo successfully')

  mongoose.connection.on('error', error => {
    logging.log('error', 'Mongoose connection error %o', error)
  })
}
module.exports = {
  connect
}
