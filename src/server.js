const express = require('express');
const morgan = require('morgan')
const router= require("./routes/index")



//           /!\
require("dotenv").config();
const server = express();
server.use(morgan('dev'));
 
server.use(express.urlencoded({extended: false}));

server.use(router);



server.listen(8000, () => {
    console.log('Connexion !');
})