const express = require('express');
const app = express();

// middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/*
request and response
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req,res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(8888);