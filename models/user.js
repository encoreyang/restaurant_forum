'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN //權限欄位
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Comment)
    //使用者收藏很多餐廳
    User.belongsToMany(models.Restaurant, {
      through: models.Favorite,
      foreignKey: 'UserId',
      as: 'FavoritedRestaurants'
    })
  };
  return User;
};