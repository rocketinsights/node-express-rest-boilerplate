'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
    'Tasks',
    'employeeId',
    {
      type: Sequelize.INTEGER,
      references : {
        model : 'Employees',
        key : 'id"'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Tasks','employeeId')
  }
};
