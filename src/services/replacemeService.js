/* Replace this service with your own, real service
 This is just some garbage data you can replace */
let nextEmployeeId = 0
let nextTaskid = 0

const initialTaskList = [
  {
    'name': 'Send Welcome Email',
    'description': 'Send an email to the candidate with the following information...',
    'completed': false
  },
  {
    'name': 'Get them a computer',
    'description': '',
    'completed': false
  },
  {
    'name': 'Give them a key',
    'description': '',
    'completed': false
  },
  {
    'name': 'Give them some swag',
    'description': 'Stickers, socks, slippers (!)',
    'completed': false
  }
]

let createNewTaskList = () => {
  let newList = [...initialTaskList].map((task) => {
    let newTask = { ...task }
    newTask.id = nextTaskid++
    return newTask
  })
  return newList
}

let getInitialModel = () => {
  let employees = [
    {
      id: nextEmployeeId++,
      firstName: 'Gary',
      lastName: 'Dellabate',
      primaryLocation: 'Newburyport',
      tasks: createNewTaskList()
    },
    {
      id: nextEmployeeId++,
      firstName: 'Jeffrey',
      lastName: 'Lebowski',
      primaryLocation: 'Boston',
      tasks: createNewTaskList()
    },
    {
      id: nextEmployeeId++,
      firstName: 'Don',
      lastName: 'Draper',
      primaryLocation: 'Boston',
      tasks: createNewTaskList()
    }
  ]
  return employees
}

module.exports = {
  getInitialModel
}
