# To the Moon

To the Monn is a sandbox environment for building a TypeScript API using Express and Sequelize ORM with PostgreSQL.

It includes a complete setup for local development and integration testing using Docker.

## Getting started

Below a brief description on how to setup for Development and and Integration Tests.

### Development

- Set up the local database

  - First spin up the local db with `cd database && docker compose -f docker-compose.dev.yml up`
  - Open another another shell install the dependencies with `cd database && npm i`
  - Set the environment variables `cp example.env .env`
  - Execute the migrations `npm run migrate`
  - Note: Migrations are only required to be executed one time as the DB Container has a volume which allows data to be persisted.

- Setting up the api:
  - Install the dependencies with `cd api && npm i`
  - Setup the local env variables `cp example.env .env`
  - Start the server for dev with `npm run dev`
  - Run unit tests with `npm run test`

### Integration Tests

- CD in to the integrations folder: `cd integration`
- Prepare the environment variables with `cp example.env .env`
- Install the dependencies `npm i`
- Start the integration containers with `docker compose --env-file .env up --build`
- Wait until the api is successfully running
  - You should see the following log: `to-the-moon-api | [server] Server is running at port 3000`
- On another shell execute the tests with: `cd integration && npm run test`
- Note: To successfully run the tests again please rebuild the containers with: `docker compose --env-file .env down` and than `docker compose --env-file .env up --build`

## Development roadmap

Table below lists the items on the way towards being able to deploy, further develop and maintain this REST Api in production. Tasks are
ordered according to their priority with **the topmost row being the next item the team picks for development**.

| Item                                           |                                                                                                                                                                                                                                                                                                  Rationale |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Setup - Improve Prettier                       | Improve the project setup to use a single prettier file at the root of the project applied to all folderImprove the project setup to use a single prettier file at the root of the project applied to all folders This will improve the project structure and keep an uniform format for all sub projects. |
| Setup - Improve Eslint                         | Improve the project setup to use a single eslint configuration file at the root of the project applied to all folder. This will improve the project structure and keep a single source of lint errors.                                                                                                     |
| Setup - Git Hooks                              | This will improve the project structure and keep a single source of lint errors.Add a git hook to the repo to execute prettier, lint and unit tests prior to a git push. This will improve the pull requests quality and also help developers to spot any issues early on.                                 |
| Test - Integration Teardown                    | Improve the integration tests setup to have an optional teardown when completed so developers don't have to manually use compose down and up again. This will improve the development experience of integration test                                                                                       |
| Test - Unit Test Coverage Report               | Add a coverage report to unit tests to help developers identify which endpoints are not properly covered.                                                                                                                                                                                                  |
| API - Schema Validation                        | Setup an schema validation approach to the API to validate requests body, queries and parameters. This will make all endpoints safer and ensure the api only process valid data.                                                                                                                           |
| API - Schema Validation - Post User & Get User | After a good strategy was defined, apply the schema validation to Get User parameters and Create User body.                                                                                                                                                                                                |
| API - Authentication & Authorization           | Define how users will authenticate to the API and how they will be authorized to certain endpoints. Should we use any third parties or only secret and API key are enough? Should we create user roles or assign scopes to each key?                                                                       |
| API - Session                                  | Define if it's necessary and how we should store and keep track of the user's session.                                                                                                                                                                                                                     |
| API - Audit Events                             | For critical operations like creating, editing or deleting users we should have a stronger log of the operation. To start we could create a table of audit events, to keep a better record of which user performed such actions and what users were affected by it.                                        |
| API - Rate Limit                               | Define a Rate Limit strategy to be applied to each user calling the API.                                                                                                                                                                                                                                   |
| Deployment - Secrets                           | Define how Database and Third Party API secrets should be stored. Should we use AWS Parameter Store or a custom repository is enough?                                                                                                                                                                      |
| Deployment - Pipelines                         | Set up pipelines for Development and Production Environments                                                                                                                                                                                                                                               |
| Release - Documentation                        | Create a documentation page for the API.                                                                                                                                                                                                                                                                   |
