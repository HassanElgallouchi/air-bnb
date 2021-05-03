const express = require('express');
const morgan = require('morgan')
const routerPlace = require('./routes/places');
const router= require("./routes/users")



//           /!\
require("dotenv").config();
const server = express();
server.use(morgan('dev'));
 
server.use(express.urlencoded({extended: false}));
server.use(routerPlace);
server.use(router);



server.listen(8000, () => {
    console.log('Connexion !');
})