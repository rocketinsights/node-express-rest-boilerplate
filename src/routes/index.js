const express = require('express')
const asyncHandler = require('express-async-handler')
const healthController = require('../controllers/healthController')
const replaceMeController = require('../controllers/replacemeController')

let router = express.Router()
router.route('/health').get(healthController.healthCheck)

/* FIXME put your real routes here */
router.route('/replaceme').get(asyncHandler(replaceMeController.getReplaceMes))
  .put(asyncHandler(replaceMeController.updateReplaceMes))
  .post(asyncHandler(replaceMeController.addReplaceMes))

module.exports = router
