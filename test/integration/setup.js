// FIXME add any datastore setup/teardown stuff here for integration tests
console.log('Pre test setup...')

const db = require('../../src/db/index')
const mongoose = require('mongoose')
const Employee = require('../../src/db/models/Employee')
const testData = require('../integration/data/exampleData.json')
const logging = require('../../src/logging')

const setupIntegrationTest = async () => {
  await db.connect()

  logging.log('warn', 'Deleting existing test data for integration test')
  await Employee.collection.drop()
  logging.log('info', 'Inserting test data for integration test')
  var bulkOps = []
  testData.forEach(item => {
    let upsertDoc = {
      insertOne: {
        document: item
      }
    }
    bulkOps.push(upsertDoc)
  })

  await Employee.collection.bulkWrite(bulkOps)
}

before(async () => {
  await setupIntegrationTest()
})

after(async () => {
  logging.log('info', 'Shutting down db connections for integration tests')
  mongoose.disconnect()
})
