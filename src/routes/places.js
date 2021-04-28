const express = require('express');
//const routerPlace = require('routes');

const routerPlace = express.Router();

const placeController = require("../controllers/places");
routerPlace.post("/api/place", placeController.addOnePlace);// add un place
//const placeController = require("../controllers/places");
//router.get("/", placeController.findPlaces);

routerPlace.get("/api", (req, res) => {
    res.json({
        name: 'filmon',
        email : 'fil@gmai.com',
        rolle: 'enginer',
        rolle: 'enginer'

       
    });
});


routerPlace.get("/api/courses", (req, res) => {
    res.send(["filmon","hasan"]);
});

routerPlace.use('*',(request,response)=>{
    response.status(404).json({
        message:'this gestion is not found tray another route'
    })
})


 module.exports = routerPlace;