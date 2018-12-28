const dotenv = require('dotenv')
dotenv.load({ path: '.env' })
require('./server.js')
require('./db/index.js')
