const { createLogger, format, transports } = require('winston')

let logLevel = process.env.LOG_LEVEL || 'info'
let consoleLog = process.env.LOG_TO_CONSOLE || false
let fileLog = process.env.LOG_TO_FILENAME || false

/* This blog post has some good information on configuring winston if you want to customize it.
 * https://thisdavej.com/using-winston-a-versatile-logging-library-for-node-js
 */
const appFormat = format.combine(
  format.timestamp(),
  format.splat(),
  format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`))

let appTransports = []
if (consoleLog) appTransports.push(new transports.Console())
if (fileLog) appTransports.push(new transports.File({ filename: fileLog }))

const logger = createLogger({
  level: logLevel,
  format: appFormat,
  transports: appTransports
})

module.exports = logger
