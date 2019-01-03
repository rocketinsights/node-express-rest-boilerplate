const express = require('express')
const asyncHandler = require('express-async-handler')
const healthController = require('../controllers/healthController')
const replaceMeController = require('../controllers/replacemeController')

let router = express.Router()

router.route('/health').get(healthController.healthCheck)

router.route('/replaceme').get(asyncHandler(replaceMeController.getReplaceMes))
  .put(replaceMeController.updateReplaceMes)
  .post(asyncHandler(replaceMeController.addReplaceMes))

module.exports = router
