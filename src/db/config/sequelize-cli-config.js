/* config file used by the sequelize cli only, not at runtime */
const dotenv = require('dotenv')
const config = require('pg-connection-string').parse(process.env.DATABASE_CONNECTION_STRING)
dotenv.load({ path: '.env' })

module.exports = {
  username: config.user,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: 'postgres'
}
