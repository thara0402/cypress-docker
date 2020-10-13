# Cypress using Docker

## 事前準備
- Test File を cypress/integration ディレクトリに配置する

## Docker で実行する

### Docker Build
```shell-session
$ docker build -t cypress-docker:1.0.0 .
```

### Docker Run
```shell-session
$ docker run --rm -it cypress-docker:1.0.0
```

## Browser で実行する

### Install
```shell-session
$ npm install cypress --save-dev
```

### Run
```shell-session
$ npx cypress run
```

## Reference
### Docker Image
https://docs.cypress.io/examples/examples/docker.html#Images

### Environment Variables
https://docs.cypress.io/guides/guides/environment-variables.html#Setting
