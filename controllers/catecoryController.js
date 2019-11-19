const db = require('../models')
const Category = db.Category

const categoryService = require('../services/categoryServices.js')

let categoryController = {
  getCategories: (req, res) => {
    // return Category.findAll().then(categoies => {
    //   if (req.params.id) {
    //     Category.findByPk(req.params.id)
    //       .then((category) => {
    //         return res.render('admin/categories', { categoies: categoies, category: categoies })
    //       })
    //   } else {
    //     return res.render('admin/categories', { categoies: categoies })
    //   }
    // })
    categoryService.getCategories(req, res, (data) => {
      return res.render("admin/categories", data)
    })
  },

  postCategory: (req, res) => {
    categoryService.postCategory(req, res, (data) => {
      if (data['status'] === 'error') {
        req.flash('error_messages', data['message'])
        return res.redirect('back')
      }
      res.redirect('/admin/categories')
    })
    // if (!req.body.name) {
    //   req.flash('error_messages', 'name didn\'t exist')
    //   return res.redirect('back')
    // } else {
    //   return Category.create({
    //     name: req.body.name
    //   })
    //     .then((category) => {
    //       res.redirect('/admin/categories')
    //     })
    // }


  },
  //修改資料Controller action
  putCategory: (req, res) => {
    categoryService.putCategory(req, res, (data) => {
      if (data['status'] === 'error') {
        req.flash('error_messages', data['message'])
        return res.redirect('back')
      }
      req.flash('success_message', data['message'])
      res.redirect('/admin/categories')
    })
    // if (!req.body.name) {
    //   req.flash('error_messages', 'name didn\'t exist')
    //   return res.redirect('back')
    // } else {
    //   return Category.findByPk(req.params.id)
    //     .then((category) => {
    //       category.update(req.body)
    //         .then((category) => {
    //           res.redirect('/admin/categories')
    //         })
    //     })
    // }
  },
  deleteCategory: (req, res) => {
    categoryService.deleteCategory(req, res, (data) => {
      if (data['status'] === 'success') {
        res.redirect('/admin/restaurants')
      }
    })
    // return Category.findByPk(req.params.id)
    //   .then((category) => {
    //     category.destroy()
    //       .then((category) => {
    //         res.redirect('/admin/categories')
    //       })
    //   })
  }
}


module.exports = categoryController