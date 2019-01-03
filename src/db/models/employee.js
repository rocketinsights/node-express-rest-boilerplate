'use strict';

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    primaryLocation: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    Employee.hasMany(models.task, {
      foreignKey : 'employeeId'
    });
  };
  return Employee;
};