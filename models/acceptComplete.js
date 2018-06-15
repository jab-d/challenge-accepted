'use strict';
module.exports = function (sequelize, DataTypes) {
    var AcceptComplete = sequelize.define("AcceptComplete", {
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return AcceptComplete;
};

