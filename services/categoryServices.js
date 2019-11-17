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
  }
}
module.exports = categoryService