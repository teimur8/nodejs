const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set("views",__dirname + "/views");

// middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// обтарботка мидла
// app.use((req, res, next) => {
//   req.blablabla = '123';
//   next();
// });


// app.all('/:id/:fName/:lName', (req, res, next) => {
//   // res.send(`id: ${req.params.id} fName: ${req.params.fName} lName:${req.params.lName} `);
//   res.send(JSON.stringify(req.params));
//   // next();
// });

/*
request and response
 */
app.get('/', (req, res) => {
  res.render("homepage", {
    vegetables: [
      "carrot",
      "potato",
      "beet"
    ],
    title:'Title'
  });
});
// app.get('/', (req, res) => {
//   console.log(req.blablabla);
//   res.send('Hello world');
// });
app.post('/', (req,res) => {
  console.log(req.body);
  res.send('ok');
});





app.listen(8889);