const { response, request } = require("express");

const Place = require("../moduls/place");
//111111 pour afficher tout les place ok
exports.findPlaces= (request, response) => {
  
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
////////////////////// j'ai besoin un user id ou city id s
exports.findById= (request, response) => {
  const {id} = request.params;
  console.log(id)
  Place.getOneById(id, ( error, result) => {
    if (error) {
      response.status(500).json({
        message: 'there is probleme on your server.'
      });
    }else 
    response.status(200).json({
     
     result
    });
    console.log(result);
  });
}

/////////////3333/ pour ajouter une place
exports.addOnePlace = (request, response) => {
    
  //console.log(addOnePlace)
  Place.createPlace(request.query, (error, result) => {
      if (error) {
          response.send(error.message);
      }

      response.status(200).json({
       
       message:" the place had been add"
       });
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