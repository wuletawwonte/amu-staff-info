const express = require("express");
const router = express.Router();
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "10.144.12.200",
  user: "wuletaw",
  password: "Phantome@81",
  database: "amu_employees",
});

router.get("/", (req, res, next) => {
  connection.connect();

  connection.query("SELECT * FROM employees", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows);
    res.status(200).json({
        'data': rows
    });
  });

  connection.end();
});

module.exports = router;
