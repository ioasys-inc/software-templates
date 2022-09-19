# Project Name

[![Release Version](https://img.shields.io/badge/release-v0.0.0-blue)]()
[![Sonarcloud Status](https://sonarqube.ioasys.com.br/api/project_badges/measure?project=PROJECT_KEY&metric=alert_status)](https://sonarcloud.io/dashboard?id=PROJECT_KEY)
[![SonarCloud Coverage](https://sonarqube.ioasys.com.br/api/project_badges/measure?project=PROJECT_KEY&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=PROJECT_KEY)
[![SonarCloud Bugs](https://sonarqube.ioasys.com.br/api/project_badges/measure?project=PROJECT_KEY&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=PROJECT_KEY)
[![SonarCloud Vulnerabilities](https://sonarqube.ioasys.com.br/api/project_badges/measure?project=PROJECT_KEY&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=PROJECT_KEY)
[![Release Version](https://img.shields.io/badge/co.created%20by-ioasys-dc3562)]()

> Add the project description

## Project Setup

### Installation Steps

> **IMPORTANT!** Add any other step that is required in order to setup/run the app locally or in any other environment.

Install dependencies
```sh
$ npm install
```

Setup environment variables (modify/add more variables if/when needed)

```sh
$ cp .env.example .env
```

### Running the app

```sh
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

### Testing the app

```sh
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

> Describe the deployment process (if applicable)

## Project Structure

> Describe the project's structure, adding a concise and objective description

| Directory     | Description                                                                                                           |
|---------------|-----------------------------------------------------------------------------------------------------------------------|
| src/@config/  | Stores code related to the application's configuration.                                                               |
| src/@modules/ | Stores all modules for the application. Ex.: Health, Users                                                            |
| src/@shared/  | Stores code that can be used across all modules. Ex.: Providers, Helpers, Enums                                       |
| docs/         | Stores everything related to the application's documentation. Ex.: DB, and Architecture Diagrams, Business Rules, etc |
| infra/        | Stores everything related to the application's infrastructure. Ex.: DB, and Deployment scripts, etc                   |


## Diagrams

> Add diagrams related to this project, if applicable, for example: DB diagram, Architecture, etc.
> - ![DB Diagram](/docs/db-diagram.png)

## Team

> Add the names of the members of the team involved in the project, for example:
> - Darth Sidius (PO)
> - Darth Vader (SM)
> - Inquisitor (dev)

## Business Rules

> Add links describing business rules that might be somewhat difficult to understand only by looking at the code, or it might just be helpful to know, for example:
> - [User Import Business Rules](/docs/users-import.md) 
