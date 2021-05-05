const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const server = express();
 
server.use(cors())

const router = require("../src/routes/index");



//           /!\
require("dotenv").config();
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));

server.use(router);



server.listen(8000, () => {
    console.log('Connexion !');
})