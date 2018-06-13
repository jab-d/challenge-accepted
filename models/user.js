'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    points_earned: {
      type: DataTypes.INTEGER
    }
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Challenge, {
      onDelete: "cascade"
    });
  };

  return User;
};
