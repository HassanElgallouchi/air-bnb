const express = require('express');
const server = express();

//           /!\
// require("dotenv").config();

server.use(express.urlencoded({extended: false}));


// server.use(router);


server.listen(process.env.PORT, () => {
    console.log('Connexion !');
})