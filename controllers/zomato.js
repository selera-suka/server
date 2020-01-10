const axios = require('axios')

class ZomatoController {
  static detailRestaurant(req, res, next) {
    
    const { res_id } = req.query
    axios({
      url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}`,
      method: 'GET',
      headers: {
        user_key: process.env.ZOMATO_ID
      }
    })
      .then(({ data }) => {
        res.status(201).json(data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  static fetchRestaurantAround(req, res, next) {
    const { lat, lon } = req.query
    axios({
      url:  `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&radius=10000`,
      method: 'GET',
      headers: {
        user_key: process.env.ZOMATO_ID
      }
    })
    .then(({ data }) => {
      let restaurants = data.restaurants
      let resto = []
      restaurants.forEach(data => {
        if (data.restaurant.thumb !== '') {
          resto.push({ 
            name: data.restaurant.name, 
            location: data.restaurant.location,
            cuisines: data.restaurant.cuisines,
            thumb: data.restaurant.featured_image
          })
        }
      });
      res.status(201).json(resto);
    })
    .catch(err => {
      console.log(err)
    })
  }
}

module.exports = ZomatoController