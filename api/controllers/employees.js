const connection = require("../config/connection");

exports.employees_get_all = (req, res, next) => {
  connection.query("SELECT * FROM employees", function (err, rows, fields) {
    if (err) throw err;
    console.log("The List of Staffs : ", rows);
    res.status(200).json({
      staffs: rows,
    });
  });
};
