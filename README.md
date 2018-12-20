# Rocket Insights Node Express.js Boilerplate

Intended to get you started fast on an [Express](https://expressjs.com/)  REST API with no frontend.

Goals:

- KISS (Keep It Simple, Stupid)
- Not to dictate application architectural patterns or implementation style/details.
- Get an almost production-ready API up and running with a clone and replacement of minimal code.
- Take care of the boilerplate "plumbing" around setting up a node REST API.

*This project still needs feedback from other Rocketeers as of Dec 2018!*

## Features

* Simple file/folder structure/layout:
  * *routes* - Express route configurations
  * *controllers* - Express controllers to handle requests/responses
  * *services* - Business logic modules.  This could be renamed to something else or removed entirely.
  * *models* - TODO Data models
  * *server.js* - Core setup of Express
* Common Express middleware already enabled (CORS, bodyparser, etc)
* Environment variable configuration with [dotenv-safe](https://www.npmjs.com/package/dotenv-safe). 
  * See the `.env` file for configurable options and to add new ones.
* Logging setup with [Winston](https://github.com/winstonjs/winston)

## TODO's

- [ ] Hook up to a database (or different database flavors)
 - [ ] Add sample models
- [ ] Authentication with PassportJS
- [ ] Docker/Docker Compose setup

# To get started

Run:
`npm install` or `yarn install`

Then:
`npm run dev` - This will start the app up using nodemon which will hot reload the app if it detects code changes.