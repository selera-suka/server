const express = require('express')
const router = express.Router()
const analyticsRouter = require('./analytics')
const gmapsRouter = require('./gmaps')
const weatherRouter = require('./weather')
const zomatoRouter = require('./zomato')
const signinRouter = require('./signin')

router.use('/analytics', analyticsRouter)
router.use('/weather', weatherRouter)
router.use('/gmaps', gmapsRouter)
router.use('/zomato', zomatoRouter)
router.use('/signin', signinRouter)

module.exports = router