const express = require('express');
const server = express();


// const db = require("./config/database")
  require("dotenv").config();

server.use(express.urlencoded({extended: false}));


// server.use(router);


server.listen(8000, () => {
    console.log('Connexion !'+process.env.PORT);
})