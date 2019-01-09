const dotenv = require('dotenv')
let dotenvconfig = dotenv.config({ path: 'test/.env.ci.test' })
if (dotenvconfig.error) {
  console.log('Error configuring env options: ', dotenvconfig.error)
  process.exit(1)
}
const logging = require('../src/logging')
logging.log('info', 'Setup logging for testing')
