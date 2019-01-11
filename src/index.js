const dotenv = require('dotenv')
let dotenvconfig = dotenv.config({ path: '.env' })
if (dotenvconfig.error) {
  console.log('Error configuring .env options: ', dotenvconfig.error)
  process.exit(1)
}
const app = require('./server.js')
const logging = require('./logging')
/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  logging.log('info', 'App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
  logging.log('info', '  Press CTRL-C to stop\n')
})
module.exports = app
