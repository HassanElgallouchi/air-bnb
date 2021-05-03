const express = require('express');

const router = express.Router();

const cityControllers = require("../controllers/city");


router.use('*',(request,response)=>{
    response.status(404).json({
        message:'this page is not found'
    })
})
module.exports= router
