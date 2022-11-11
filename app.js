const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./src/routes');

const { json, urlencoded } = express;

const app = express();

const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({ extended : false}));

const corsOptions = {
  origin: '*',
  optionsSucessStatus: 200
};

app.use(cors(corsOptions));

app.use(router);

app.use('/home', (req,res) => {
  res.sendFile(path.join(__dirname+'/src/html/index.html'));
})

app.use('/', (req, res)=> {
  res.send("this microservice is running ");
});

app.listen(port, () => {
  console.log(`server listening en el puerto ${port}`);
})