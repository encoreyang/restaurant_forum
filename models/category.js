'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Restaurant)
  };  //撈出屬於 category 這個分類的所有餐廳，注意此時 Restaurants 是複數
  return Category;
};