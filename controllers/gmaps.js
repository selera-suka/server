const axios = require('axios')

class GoogleMapsController {
  static getMaps(req, res, next) {
    const { origin, destination } = req.body
    axios({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/directions/json',
      params: {
        origin,
        destination,
        key: process.env.GMAPS_KEY
      }
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = GoogleMapsController