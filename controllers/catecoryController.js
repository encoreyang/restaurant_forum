const db = require('../models')
const Category = db.Category
let categoryController = {
  getCategories: (req, res) => {
    return Category.findAll().then(categoies => {
      return res.render('admin/categories', { categoies: categoies })
    })
  }
}
module.exports = categoryController