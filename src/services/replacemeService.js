const logging = require('../logging')
const db = require('../db/index')
/* FIXME Replace this service with your own, real service
 This is just some garbage data you can replace */

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
  return db.models.employee.findAll({ include: [db.models.task] })
}

let addModelItem = async item => {
  let newEmployee = { ...item }
  newEmployee.Tasks = createNewTaskList()
  logging.log('debug', 'Adding item %o', newEmployee)
  return db.models.employee.create(newEmployee, {
    include: [
      {
        model: db.models.task
      }
    ]
  })
}

let updateModelItem = async (item) => {
  logging.log('debug', 'Updating item %o', item)

  return db.models.employee
    .update(item, { where: { id: item.id } })
    // TODO seems like this is a bit crazy... Easier way?
    .then(result => {
      item.Tasks.map(task => {
        db.models.task.update(task, { where: { id: task.id } })
      })
    })
}
module.exports = {
  getModelItems,
  addModelItem,
  updateModelItem
}
