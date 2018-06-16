'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkInsert('Challenges', [
      {
        challenge_name: 'Conquer the mountain!',
        location: 'Mission Peak',
        description: 'Hike to the top of Mission Peak within an hour',
        points: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Ten, Ten, Ten, Ten',
        location: 'Planet Granite',
        description: 'Successfully complete at least four 5.10a walls',
        points: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Ohlay',
        location: 'Any local bull farm',
        description: 'Wrestle a bull into submission with your bare hands',
        points: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Its so colorful',
        location: 'Santa Clara, California',
        description: 'Complete the 5k color run at Great America',
        points: 3,
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
