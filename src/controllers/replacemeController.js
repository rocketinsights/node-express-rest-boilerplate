/* FIXME replace this controller with your HTTP handling */
const replaceMeService = require('../services/replacemeService')
const logging = require('../logging')

/* FIXME These are all async assuming that ultimately they will be replaced by database calls */
let getReplaceMes = async (req, res) => {
  logging.log('debug', 'Calling getModelItems')
  return res.json(await replaceMeService.getModelItems())
}

let addReplaceMes = async (req, res) => {
  logging.log('debug', 'Calling addReplaceMes')
  return res.json(await replaceMeService.addModelItem(req.body))
}

let updateReplaceMes = async (req, res) => {
  logging.log('debug', 'Calling updateReplaceMes')
  return res.json(await replaceMeService.updateModelItem(req.body))
}

module.exports = {
  getReplaceMes,
  addReplaceMes,
  updateReplaceMes
}
