const db = require('../../models')
const Restaurant = db.Restaurant
const Category = db.Category

const adminService = require('../../services/adminServices')

const adminController = {
  getRestaurants: (req, res) => {
    adminService.getRestaurants(req, res, (data) => {
      return res.json(data)
    })
    // return Restaurant.findAll({ include: [Category] }).then(restaurants => {
    //   return res.json({ restaurants: restaurants })
    // })
  },
  postRestaurant: (req, res) => {
    adminService.postRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },
  getRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, { include: [Category] }).then(restaurant => {
      adminService.getRestaurant
        (req, res, (data) => {
          return res.json(data)
        })
    })
  },
  putRestaurant: (req, res) => {
    adminService.putRestaurant(req, res, (data) => {
      return res.json(data)
    })
  },
  deleteRestaurant: (req, res) => {
    adminService.deleteRestaurant(req, res, (data) => {
      return res.json(data)
    })
    // return Restaurant.findByPk(req.params.id)
    //   .then((restaurant) => {
    //     restaurant.destroy()
    //       .then((restaurant) => {
    //         return res.json({ status: 'success', message: '' })
    //       })
    //   })
  }
}
module.exports = adminController