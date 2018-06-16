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
    bio: {
      type: DataTypes.STRING
    },
    points_earned: {
      type: DataTypes.INTEGER
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Challenge, {
      onDelete: "cascade"
    });
    User.belongsToMany(models.Challenge, {through: models.AcceptComplete});    
  };

  return User;
};
