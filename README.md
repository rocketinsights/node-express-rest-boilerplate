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

# To get started with Development with Docker (best option)

This is a full fledged development environment with a database running alongside it in a container
as well.  It will pickup any local changes you make *except for dependency updates*.

Make sure you have [Docker for Mac](https://docs.docker.com/docker-for-mac/) and Docker Compose installed.

From the project's directory run:

```bash
docker-compose -f docker-compose.yml -f docker-compose.local.yml up
```

This will use a base Docker Compose file meant to run in Production and extends it with some handy things for development.

To get into a shell while running the app in docker, run:

```bash
docker-compose exec api /bin/bash
````

## To rebuild when dependencies are added

Run
```bash
docker-compose build
```

Then run the same `up` command as above.

# To get started locally (without Docker)

If you'd rather just develop locally and install databases there, etc, you can do the following:
Run:
`npm install` or `yarn install`

Then:
`npm run dev` - This will start the app up using nodemon which will hot reload the app if it detects code changes.
