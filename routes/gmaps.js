const express = require('express')
const router = express.Router()
const { GoogleMapsController } = require('../controllers')

router.get('/', GoogleMapsController.getMaps)

module.exports = router