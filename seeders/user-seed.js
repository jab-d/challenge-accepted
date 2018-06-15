'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Users', [
        {
          name: 'Andrew Hemans',
          points_earned: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Brandon Fraizer',
          points_earned: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dorian Macias',
          points_earned: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jessica Son',
          points_earned: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
