const fs = require('fs')
const db = require('../models')
const Restaurant = db.Restaurant
const imgur = require('imgur-node-api')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
const Category = db.Category

const adminService = require('../services/adminServices')

const adminController = {
  getRestaurants: (req, res) => {
    adminService.getRestaurants(req, res, (data) => {
      return res.render('admin/restaurants', data)
    })
    // return Restaurant.findAll({ include: [Category] }).then(restaurants => {
    //   //console.log(restaurants)
    //   return res.render('admin/restaurants', { restaurants: restaurants })
    // })
  },

  creatRestaurant: (req, res) => {
    Category.findAll().then(categories => {
      return res.render('admin/create', { categories: categories })
    })

  },

  postRestaurant: (req, res) => {
    adminService.postRestaurant(req, res, (data) => {
      if (data['status'] === 'error') {
        req.flash('error_messages', data['message'])
        return res.redirect('back')
      }
      req.flash('success_message', data['message'])
      res.redirect('/admin/restaurants')
    })
  },
  //單一筆餐廳資料
  getRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id, { include: [Category] }).then(restaurant => {
      adminService.getRestaurant
        (req, res, (data) => {
          return res.render('admin/restaurant', data)
        })
      // return res.render('admin/restaurant', {
      //   restaurant: restaurant
      // })
    })
  },
  //編輯資料
  editRestaurant: (req, res) => {
    return Restaurant.findByPk(req.params.id).then(restaurant => {
      Category.findAll().then(categories => {
        return res.render('admin/create', {
          categories: categories,
          restaurant: restaurant
        })
      })
    })
  },
  //methode版
  putRestaurant: (req, res) => {
    adminService.putRestaurant(req, res, (data) => {
      if (data['status'] === 'error') {
        req.flash('error_messages', "name didn't exist")
        return res.redirect('back')
      }
      req.flash('success_message', data['message'])
      res.redirect('/admin/restaurants')
    })
  },
  //刪除功能
  deleteRestaurant: (req, res) => {
    adminService.deleteRestaurant(req, res, (data) => {
      if (data['status'] === 'success') {
        res.redirect('/admin/restaurants')
      }
    })

    // return Restaurant.findByPk(req.params.id)
    //   .then((restaurant) => {
    //     restaurant.destroy()
    //       .then((restaurant) => {
    //         res.redirect('/admin/restaurants')
    //       })
    //   })
  }
}
module.exports = adminController