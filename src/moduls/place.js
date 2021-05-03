 const db = require("../config/database");
//1111/// pour aficher tout les place  ok

exports.getAllPlace = ( callback) => {
  db.query(`SELECT * FROM place ;`, (error, result) => {
    if (error) {
    console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
  })
}
////////22222///
exports.getOneById = (id, callback) => {
  db.query(`SELECT * FROM place WHERE id = ${id};`, (error, result) => {
    if (error) {
    console.log("error: ", error);

      callback(error, null);
      return;
    }

    callback(error, null);
  })
}



// ////////////333333///////////////////////// ok ok ok pour ajouter une plac

exports.createPlace = (place, callback) => {
    console.log(place);
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
////////////444444/
exports.deletePlace = (id, callback) => {
  db.query(`DELETE FROM place WHERE id = ${id};`, (error, result) => {
    if (error) {
    console.log("error: ", error);

      callback(error, null);
      return;
    }

    callback(error, null);
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

