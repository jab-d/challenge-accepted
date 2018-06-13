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
    // image: {
    //   type: DataTypes.STRING
    // }
});

  Challenge.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Challenge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Challenge;
};
