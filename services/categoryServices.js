const db = require('../models')
const Category = db.Category


let categoryService = {
  getCategories: (req, res, callback) => {
    return Category.findAll().then(categoies => {
      // if (req.params.id) {
      //   Category.findByPk(req.params.id)
      //     .then((category) => {
      //       return res.render('admin/categories', { categoies: categoies, category: category })
      //     })
      // } else {
      //    return res.render('admin/categories', { categoies: categoies })

      // }
      callback({ categoies })
    })
  },
  postCategory: (req, res, callback) => {
    if (!req.body.name) {
      callback({ status: 'error', message: 'name didn\'t exist' })
      // req.flash('error_messages', 'name didn\'t exist')
      return res.redirect('back')
    } else {
      return Category.create({
        name: req.body.name
      })
        .then((category) => {
          //callback({status:'success', message: ''})
          res.redirect('/admin/categories')
        })
    }
  },
  putCategory: (req, res, callback) => {
    if (!req.body.name) {
      callback({ status: 'error', message: 'name didn\'t exist' })
      // req.flash('error_messages', 'name didn\'t exist')
      return res.redirect('back')
    } else {
      return Category.findByPk(req.params.id)
        .then((category) => {
          category.update(req.body)
            .then((category) => {
              res.redirect('/admin/categories')
            })
        })
    }
  },
  deleteCategory: (req, res, callback) => {
    return Category.findByPk(req.params.id)
      .then((category) => {
        category.destroy()
          .then((category) => {
            callback({ status: 'success', message: '' })
          })
      })
  }
}
module.exports = categoryService