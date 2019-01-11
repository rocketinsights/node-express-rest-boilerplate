# Rocket Insights Node Express.js Boilerplate

Intended to get you started fast on an [Express](https://expressjs.com/)  REST API with no frontend.

*This boilerplate is a work in progress as of January 2019 and still needs feedback from Rocketeers*

## There are a lot of great ExpressJS boilerplates out there, why did you create this one?

[We need to develop one universal boilerplate that covers everyone's use cases...](https://xkcd.com/927/).  Just kidding...

At [Rocket Insights](https://rocketinsights.com/) one of our mottos is "Strong opinions, loosely held."  We wanted to codify some of the expertise we have in server-side node.js development here and use it as a way to get started faster on projects.

Second, many boilerplates bundle together front end and backend technologies. This one's goal is for a simple HTTP REST API with no front end included.

Third, we found many existing boilerplates target a particular technology and/or architectural pattern.  This boilerplate tries to toe the line between useful and getting out of the way fast.  Think "Hello world with good logging and sensible defaults."

## Goals

The goals for this boilerplate are to: 

- Take care of the boring stuff around setting up a node REST API in Node.js and ExpressJS
- KISS (Keep It Simple, Stupid)
- Keep the frontend separate (REST API only)
- Avoid dictating architectural patterns, persistence options, or implementation style/details.
- Get an somewhat-production-ready API up and running with a `git clone` and replacement of minimal code. (With the full realization that production ready code will need a lot more work and TLC)
- Create a simple base for different "flavors" of this boilerplate for different datastores/frameworks. 

## Features

* Simple file/folder structure/layout:
  * *[routes](src/routes)* - Express route configurations
  * *[controllers](src/controllers)* - Express controllers to handle requests/responses
  * *[services](src/services)* - Business logic modules.  This could be renamed to something else or removed entirely.
  * *[server.js](src/server.js)* - Core setup of Express
  * *[db](src/db)* - Database setup placeholder, choose your own flavor.  See branches of repo for different types of datasource setup examples.
* Common Express middleware already enabled (CORS, bodyparser, etc)
* Environment variable configuration with [dotenv-safe](https://www.npmjs.com/package/dotenv-safe). 
  * See the `.env` file for configurable options and to add new ones.
* Logging setup with [Winston](https://github.com/winstonjs/winston)
* Simple unit and integration test setup with [Mocha](https://mochajs.org/),
    [Chai](https://www.chaijs.com/), and
    [Supertest](https://github.com/visionmedia/supertest)
* Easily extendable for your favorite data persistence techology.  Some examples already exist: 
  * [postgres and sequelize](../../tree/flavors/db/postgres_sequelize)
  * See [branches](../../branches) named `flavors`
* Dockerized - Simple Dockerfile setup with developer ready docker-compose file

Once you get the project setup, look for the `FIXME`'s in the codebase for areas to replace/extend.

# Future Feature Ideas 

- [ ] - Add mongodb database flavor
- [ ] - Authentication/Authorization (passportJS)
- [ ] - Rate limiting

# To get started with Development with Docker

This is a full fledged development environment which can be extended with a database or other data store running alongside it in a container as well.  It will pickup any local changes you make *except for dependency updates*.

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

# Testing The App

You can test the app by running:
```bash
curl localhost:8009/replaceme
```

Also, a sample [Postman](https://www.getpostman.com/) collection can be imported 
(in the `docs` folder).

## Automated Tests

You can run the unit test suite with no database up and running by running: 
`npm run test:unit`

Note that the database branches also have end to end integration tests configured.