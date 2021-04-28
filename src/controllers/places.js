const Place = require("../models/place");

// exports.findPlaces= (request, response) => {
//   const { place} = request;

//   Place.findPlaces((error, place) => {
//     if (error) {
//       response.send(error.message);
//     }

//     console.log(place);

//     response.redirect("/");
//   });
// }
//////////////
exports.addOnePlace = (request, response) => {
  Place.createPlace(request.query, (error, result) => {
      if (error) {
          response.send(error.message);
      }

      response.redirect("/");
  })
}
