const db = require('../config/database');

exports.getAll = (callback) => {
    const requette = `SELECT * FROM booking`;
    db.execute(requette, (error, rows) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, rows);
        }
    })
}

exports.checkByDate = (checkIn, callback) => {
    const requette = `SELECT * FROM booking WHERE check_in = ?`;
    db.execute(requette, [checkIn], (error, rows) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, rows);
        }
    })
}

exports.addOne = (body, callback) => {
    const requette = `INSERT INTO booking (check_in, check_out, place_id, user_id) VALUES (?, ?, ?, ?)`;
    db.execute(requette, [body.check_in, body.check_out, body.place_id, body.user_id], (error, rows) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, rows);
        }
    })
}