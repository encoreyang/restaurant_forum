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
  };
  return User;
};