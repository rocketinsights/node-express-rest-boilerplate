// FIXME add any datastore setup/teardown stuff here for integration tests
const logging = require('../../src/logging')
const db = require('../../src/db/index')
const Promise = require('bluebird')

const destroyAllModels = async () => {
  logging.log('warn', 'Destroying all models...')
  return db.models.database.truncate({ cascade: true }).finally(() => {
    logging.log('info', 'Finished destroying models')
  })
}

const executeSequelizeCliProcess = async command => {
  /* Looked for a programmatic way to do this, but too much going on,
  this is easier and harmless,
  see https://stackoverflow.com/a/50357091 */
  logging.log('info', 'Running sequelize command: %s', command)
  const { exec } = require('child_process')
  return new Promise((resolve, reject) => {
    const seeder = exec(
      'node_modules/.bin/sequelize ' + command,
      { env: process.env },
      (err, stdout, stderr) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      }
    )
    // Forward stdout+stderr to this process
    seeder.stdout.pipe(process.stdout)
    seeder.stderr.pipe(process.stderr)
  })
}

const seedDatabase = async () => {
  return executeSequelizeCliProcess('db:seed:all')
}

const createDatabase = async () => {
  return executeSequelizeCliProcess('db:migrate')
}

before(async () => {
  logging.log('warn', 'Tearing down database for integration tests...')
  await destroyAllModels()
  await createDatabase()
  await seedDatabase()
})

after(() => {
  logging.log('info', 'Cleaning up db connections after test runs')
  db.sequelize.close()
})
