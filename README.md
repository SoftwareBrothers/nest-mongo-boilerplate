## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with configured mongo.

## Installation

```bash
$ yarn
```

### Creating a self signed SSL certificate. Use following command and follow the instruction:

Boilerplate ships with built-in certificate, however you can create your own!

```bash
make cert
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

# Static analysis
## sonarcloud.io
For CI (codeship) you need to configure `env.encrypted` file. You should before download from you codeship project `codeship.aes` file. Then using `jet` create encrypted file.
```
jet enrypt codeship.env env.encrypted
```
Make sure that in `codeship.env` you will set up these variables:
```
SONAR_PROJECT_KEY=
SONAR_ORGANIZATION=
SONAR_HOST_URL=
SONAR_LOGIN=
```

You will find these variables in project settings in sonarcloud.io.

You may want to config commands in `codeship-steps.yml` file. 

## Local
To locally analyse your code it is enough to run
```
make sonar
```
The results can be viewed in local instance of sonarqube [https://app.local/sonarqube](https://app.local/sonarqube) or [http://localhost/sonarqube](http://localhost/sonarqube).

Local instance of sonarqube uses `sonar-scanner.properties` file.