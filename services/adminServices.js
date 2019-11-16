const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const adminService = {
  getRestaurants: (req, res, callback) => {
    return Restaurant.findAll({ include: [Category] }).then(restaurants => {
      callback({ restaurants: restaurants })
      //console.log(restaurants)
      // return res.render('admin/restaurants', { restaurants: restaurants })
    })
  }
}
module.exports = adminService