const express = require('express');

//const checke = require("../middlewares/isAuth")

const placeRouter = express.Router();

const placeController = require("../controllers/places");
placeRouter.get("/api/places", placeController.findPlaces);//nice OK  aficher tout le place  
placeRouter.get("/api/places/:id", placeController.findById);// NO j'ai besoin un user id ou city id  
placeRouter.post("/api/places",placeController.addOnePlace);// niceOK  add un place
placeRouter.delete("/api/places/delete/:id", placeController.delete) ///// OK for delete a place 
///////


 module.exports = placeRouter;