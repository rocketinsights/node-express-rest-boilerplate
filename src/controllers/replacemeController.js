/* replace this controller with your real logic */
const replaceMeService = require('../services/replacemeService')
const logging = require('../logging')

let getReplaceMes = async (req, res) => {
  logging.log('debug', 'Calling getModelItems')
  return res.json(await replaceMeService.getModelItems())
}

let addReplaceMes = async (req, res) => {
  logging.log('debug', 'Calling addReplaceMes')
  return res.json(await replaceMeService.addModelItem(req.body))
}

let updateReplaceMes = (req, res) => {
  logging.log('debug', 'Calling updateReplaceMes')
  return res.json(replaceMeService.updateModelItem(req.body))
}

module.exports = {
  getReplaceMes,
  addReplaceMes,
  updateReplaceMes
}
