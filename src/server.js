const express = require('express');
const server = express();
const morgan = require("./routes/city")

server.use (morgan('dev'));

 //require("dotenv").config();//

server.use(express.urlencoded({extended: false}));


// server.use(router);

const port = 8000
server.listen(port, () => {
    console.log('Connexion !');
})