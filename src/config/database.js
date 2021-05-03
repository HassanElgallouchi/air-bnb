const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "airbnb_db"
});

db.connect((error) => {
    if(error) throw error;
    console.log("Connexion");
});

module.exports = db;