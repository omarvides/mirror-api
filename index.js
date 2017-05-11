'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const util = require('util');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', function (req, res) {
  console.log(`Message: ${util.inspect(req.body)}`);
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});