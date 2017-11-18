const express = require('express');

const bodyParser = require('body-parser');

const helmet = require('helmet');

const chalk = require('chalk');

const JiraApi = require('jira').JiraApi;

const axios = require('axios');

const app = express();

import { jiraUser, jiraPass } from '../src/token.json';

var jira = new JiraApi(#);

app.use(bodyParser.json());

app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/issue', (request, response) => {
  jira.addNewIssue(request.body, (error, success) => {
    if (error) {
      response.status(400).send(error);
      return;
    }
    response.send(success);
  })
});

app.listen(8080, () => {
  console.log(`Server up and listening at ${ chalk.cyan('localhost') }:${ chalk.yellow(8080) }`);
});
