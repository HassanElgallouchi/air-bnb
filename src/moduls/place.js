 const db = require("../config/database");
//   //// pour aficher tout lesz place  ok

// exports.findPlaces = (callback) => {
//   db.query(`SELECT * FROM place ;`, (error, result) => {
//     if (error) {
//       console.log("error: ", error);
//       callback(error, null);
//       return;
//     }

//     callback(null, result);
//   })
// }

// ///////////////////////////////////// ok ok ok

exports.createPlace = (place, callback) => {
    console.log(place.available);
  db.query(`INSERT INTO place  (name, description, rooms, bathroom, max_gursts, price_by_night, available) 
  VALUES ("${place.name}", "${place.description}", "${place.rooms}", "${place.bathroom}", 
  "${place.max_gursts}", "${place.price_by_night}", "${place.available}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
    })
}

// // exports.authentificate= (name_place, callback) => {
// //   db.query(`SELECT * FROM user WHERE name_place  = "${name_place}";`, (error, result) => {
// //     if (error) {
// //       console.log("error: ", error);
// //       callback(error, null);
// //       return;
// //     }
// //     callback(null, result);
// //     }) 
// // }