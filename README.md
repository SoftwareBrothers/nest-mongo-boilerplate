## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
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