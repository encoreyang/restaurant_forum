'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Restaurant.associate = function (models) {
    // associations can be defined here
    Restaurant.belongsTo(models.Category)
    //撈出 restaurant 這間餐廳所屬的分類，注意此時 Category 是單數
    Restaurant.hasMany(models.Comment)
    //餐廳有很多收藏者
    Restaurant.belongsToMany(models.User, {
      through: models.Favorite,
      foreignKey: 'RestaurantId',
      as: 'FavoritedUsers'
    })
    //餐廳有很多人喜歡
    Restaurant.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: 'RestaurantId',
      as: 'LikedUsers'
    })
  };
  return Restaurant;
};