const express = require('express')
const router = express.Router()
const geolocationRouter = require('./geolocation')
const gmapsRouter = require('./gmaps')
const weatherRouter = require('./weather')
const zomatoRouter = require('./zomato')

router.use('/geolocation', geolocationRouter)
router.use('/weather', weatherRouter)
router.use('/gmaps', gmapsRouter)
router.use('/zomato', zomatoRouter)

module.exports = router