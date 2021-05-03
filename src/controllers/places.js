const { response, request } = require("express");

const Place = require("../models/place");
//111111 pour afficher tout les place ok
exports.findPlaces= (request, response) => {
  const { place} = request.params;
  Place.getAllPlace(( error, name) => {
    if (error) {
      response.status(500).json({
        message: 'le servre founuction plus.'
      });
    }else 
    response.status(200).json({
     name
    });
 //console.log(name); // pour voir tout les place 
  });
}
////////////////////// j'ai besoin un user id ou city id 
exports.findById= (request, response) => {
  const{ place} = request.params;
  const{ id} = request.params;
  Place.getOneById(id, ( error, name) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    }else 
    response.status(200).json({
     
     name
    });
    console.log(name);
  });
}

/////////////3333/ pour ajouter une place
exports.addOnePlace = (request, response) => {
  //console.log(addOnePlace)
  Place.createPlace(request.query, (error, result) => {
      if (error) {
          response.send(error.message);
      }

      response.redirect("/");
  })
}
/////44444/////
exports.delete= (request, response) => {
  //const{ place} = request.params;
  const{ id} = request.params;
  Place.deletePlace(id, ( error, name) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    }else 
    response.status(200).json({
    name
    });
    //console.log(name);
  });
}