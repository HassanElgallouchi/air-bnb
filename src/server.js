const express = require('express');
const server = express();
const morgan =require('morgan')
const router= require("./routes/users")
// const bodyParser =require("body-parser");
const { response } = require('express');
server.use(morgan('dev'));
// server.use(bodyParser())
// const db = require("./config/database")
//   require("dotenv").config();
server.use(express.urlencoded({extended: false}));
server.use(router);
 response




server.listen(8000, () => {
    console.log('Connexion !');
})