'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const util = require('util');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', function (req, res) {
  console.log(`Message: ${util.inspect(req.body)}`);
  const response  = {
      "speech": "Ok, gracias",
      "displayText": "Ok, gracias",
  };
  res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});