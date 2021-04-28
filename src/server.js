const express = require('express');
const morgan = require('morgan');
const server = express();
const router = require('./routes/index')

server.use(morgan('dev'));

require('dotenv').config();


server.use(express.urlencoded({ extended: false }));

server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`Server est lancé sur le port ${process.env.PORT}`);
});
