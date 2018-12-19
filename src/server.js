const express = require('express')
const bodyParser = require('body-parser')
const logging = require('./logging')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.set('host', process.env.APP_HOST || '0.0.0.0')
app.set('port', process.env.APP_PORT || '8009')
app.use(cors())
app.use(bodyParser.json())
app.disable('x-powered-by')

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local') {
  // only use in development
  const errorHandler = require('errorhandler')
  app.use(errorHandler())
} else {
  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
  })
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  logging.log('info', 'App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
  logging.log('info', '  Press CTRL-C to stop\n')
})

app.use(routes)

module.exports = app
