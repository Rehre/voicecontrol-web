'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), () => {})
