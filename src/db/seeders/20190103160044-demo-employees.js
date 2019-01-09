'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Employees', [{
        firstName: 'Jeffrey',
        lastName: 'Lebowski',
        primaryLocation : 'Newburyport',
        createdAt : new Date(),
        updatedAt: new Date()
      },
     {
        firstName: 'Another',
        lastName: 'TestGuy',
        primaryLocation : 'Boston',
        createdAt : new Date(),
        updatedAt: new Date()
     }], {}).then(queryInterface.bulkInsert('Tasks', [
        {
          name : 'Do some stuff',
          description : null,
          completed: false,
          employeeId : 1,
          createdAt : new Date(),
          updatedAt : new Date(),
        },
        {
          name : 'Do some more stuff',
          description : null,
          completed: false,
          employeeId : 1,
          createdAt : new Date(),
          updatedAt : new Date(),
        },
        {
          name : 'Do some stuff',
          description : null,
          completed: false,
          employeeId : 2,
          createdAt : new Date(),
          updatedAt : new Date(),
        },
        {
          name : 'Do some more stuff',
          description : null,
          completed: false,
          employeeId : 2,
          createdAt : new Date(),
          updatedAt : new Date(),
        }
      ]),{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
