const dotenv = require('dotenv')
dotenv.load({ path: '.env' })
const app = require('./server.js')
const logging = require('./logging')
const db = require('../src/db/index')

const startup = async () => {
  /**
   * Connect to DB and start express server, in that order.
   */
  await db.connect()
  return new Promise(resolve => {
    app.listen(app.get('port'), () => {
      logging.log(
        'info',
        'App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
      )
      logging.log('info', '  Press CTRL-C to stop\n')
    })

    return resolve(app)
  })
}

const returnApp = startup()
module.exports = returnApp
