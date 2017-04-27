'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      first_name: 'John',
      last_name:'Doe',
      bio: 'asd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jihn',
      last_name:'Doe',
      bio: 'asd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jehn',
      last_name:'Doe',
      bio: 'asd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jahn',
      last_name:'Doe',
      bio: 'asd',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
