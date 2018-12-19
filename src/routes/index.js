const express = require('express')
const healthController = require('../controllers/healthController')
const replaceMeController = require('../controllers/replacemeController')

let router = express.Router()

router.route('/health').get(healthController.healthCheck)

router.route('/replaceme').get(replaceMeController.getReplaceMes)
  .put(replaceMeController.updateReplaceMes)
  .post(replaceMeController.addReplaceMes)

module.exports = router
