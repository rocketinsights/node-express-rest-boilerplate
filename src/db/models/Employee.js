const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: String,
  description: String,
  completed: Boolean
})

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  primaryLocation: String,
  tasks: [TaskSchema]
})

// Compile model from schema
const EmployeeModel = mongoose.model('Employee', EmployeeSchema)

module.exports = EmployeeModel
