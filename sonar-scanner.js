const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: "ed4b0cb3e13d2c20464d5fad69633d66a910937a",
    options: {
      'sonar.projectName': 'simple-node-js-react-npm-app',
      'sonar.projectDescription': 'simple-node-js-react-npm-app',
      'sonar.sources': 'src',
      'sonar.tests': 'src/**/*.test.js'
    }
  },
  () => process.exit()
)