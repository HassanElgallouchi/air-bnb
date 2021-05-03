
const { request, response } = require('express');
const Place = require("../models/place");
const city = require("../city/")
  
  
  exports.newPlace = (request, response) => {
  const place = request.body;
  const model = {
    name: 'string',
    city: 'number',
    description: 'string',
    rooms: 'number',
    bathrooms: 'number',
    max_guests: 'number',
    price_by_night: 'number',
    host: 'number'
  };

  












exports.addOnePlace = (request, response) => {
  Place.createPlace(request.query, (error, result) => {
      if (error) {
          response.send(error.message);
      }

      response.redirect("/");
  })
}