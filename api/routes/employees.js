const express = require("express");
const router = express.Router();
const connection = require('../config/connection');


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
