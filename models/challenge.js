'use strict';
module.exports = function(sequelize, DataTypes) {
  var Challenge = sequelize.define("Challenge", {
    challenge_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    points: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    image: {
      type: DataTypes.STRING
    }
});

  Challenge.associate = function(models) {

    Challenge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Challenge.belongsToMany(models.User, {through: models.AcceptComplete})
  };
  return Challenge;
};
