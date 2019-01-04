const Sequelize = require('sequelize')
const logging = require('../logging')
const modelsloader = require('./modelsloader')
const path = require('path')

const databaseConnectionString = process.env.DATABASE_CONNECTION_STRING

if (!databaseConnectionString) logging.log('fatal', 'No process.env.DATABSE_CONNECTION_STRING present')

const dbConfigs = {
  dialect: process.env.DATABASE_DIALECT,
  pool: {
    acquire: 30000,
    idle: 10000,
    max: process.env.DATABASE_MAX_POOL_SIZE || 30,
    min: process.env.DATABASE_MIN_POOL_SIZE || 2
  }
}

logging.log('info', 'Connecting to database using configs: %o', dbConfigs)
const sequelize = new Sequelize(databaseConnectionString, dbConfigs)

const models = modelsloader.load({ sequelize, baseFolder: path.join(__dirname, '/models') })

module.exports = {
  sequelize,
  Sequelize,
  models
}
// FIXME initialize your database here
// See branches of repo for different skeletons for differing datasources
