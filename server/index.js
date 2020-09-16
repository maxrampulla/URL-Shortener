const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlController = require("./controllers/urlController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const{mongoose} = require("./db");

const port = 3000;

app.listen(port, ()=> {
    //on success 
    console.log('we are live ' + port)

});

app.use("", urlController);


