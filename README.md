# Rocket Insights Node Express.js Boilerplate

Intended to get you started fast on an [Express](https://expressjs.com/)  REST API with no frontend.

This project still needs feedback from other Rocketeers as of Dec 2018!

## Features

* Logging setup with [Winston](https://github.com/winstonjs/winston)
* Sensible folder structure/layout for webservice routes/controllers
* Common Express middleware already enabled

## TODO's

- [ ] Hook up to a database (or different database flavors)
- [ ] Authentication with PassportJS
- [ ] Docker/Docker Compose setup

# To get started

Run:
`npm install` or `yarn install`

Then:
`npm run dev` - This will start the app up using nodemon which will hot reload the app if it detects code changes.

# Changing Environmental Parameters

The project uses [dotenv-safe](https://www.npmjs.com/package/dotenv-safe) to
configure environmental parameters. Check out the `.env` file in the root
of the project to determine what options are available.