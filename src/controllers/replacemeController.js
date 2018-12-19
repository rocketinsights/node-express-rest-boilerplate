/* replace this controller with your real logic */
const replaceMeService = require('../services/replacemeService')
const logging = require('../logging')

let getReplaceMes = (req, res) => {
  logging.log('debug', 'Calling getReplaceme')
  return res.json(replaceMeService.getInitialModel())
}

module.exports = {
  getReplaceMes
}
