const express = require('express')
const router = express.Router()
const { ZomatoController } = require('../controllers')

router.get('/', ZomatoController.fetchRestaurantAround)
router.get('/search', ZomatoController.searchRestaurantAround)
router.get('/restaurant', ZomatoController.detailRestaurant)

module.exports = router