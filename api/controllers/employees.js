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

exports.employees_search = (req, res, next) => {
  const searchKey = req.params.searchKey;
  connection.query(
    "SELECT * FROM employees WHERE firstname LIKE '%" +
      searchKey +
      "%' OR lastname LIKE '%" +
      searchKey +
      "%'",
    (err, rows, fields) => {
      console.log(rows);
      res.status(200).json({ staffs: rows });
    }
  );
};
