const logging = require('../logging')

exports.healthCheck = (req, res) => {
  logging.log('debug', 'Health check requested')
  return res.json({ status: 'ok' })
}
