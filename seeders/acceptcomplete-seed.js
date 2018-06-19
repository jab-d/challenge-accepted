'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('AcceptCompletes', [
      {
        completed: true,
        UserId: 1,
        ChallengeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: true,
        UserId: 2,
        ChallengeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: true,
        UserId: 3,
        ChallengeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: true,
        UserId: 4,
        ChallengeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
