const express = require('express')
const router = express.Router()
const { AnalyticsController } = require('../controllers')

router.get('/', AnalyticsController.getAnalytics)

module.exports = router