const logging = require('../logging')
const Employee = require('../db/models/Employee')
/* FIXME Replace this service with your own, real service */

const initialTaskList = [
  {
    name: 'Send Welcome Email',
    description:
      'Send an email to the candidate with the following information...',
    completed: false
  },
  {
    name: 'Get them a computer',
    description: '',
    completed: false
  },
  {
    name: 'Give them a key',
    description: '',
    completed: false
  },
  {
    name: 'Give them some swag',
    description: 'Stickers, socks, slippers (!)',
    completed: false
  }
]

let createNewTaskList = () => {
  let newList = [...initialTaskList].map(task => {
    let newTask = { ...task }
    return newTask
  })
  return newList
}

let getModelItems = async () => {
  return Employee.find({})
}

let addModelItem = async item => {
  logging.log('debug', 'Adding item %o', item)
  item.tasks = createNewTaskList()
  const newEmployee = new Employee(item)
  return newEmployee.save()
}

let updateModelItem = async item => {
  logging.log('debug', 'Updating item %o', item)
  return Employee.findOneAndUpdate({ _id: item._id }, item, { new: true })
}
module.exports = {
  getModelItems,
  addModelItem,
  updateModelItem
}
