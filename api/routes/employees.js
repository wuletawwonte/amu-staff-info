const express = require("express");
const router = express.Router();

const EmployeeController = require('../controllers/employees');

router.get("/", EmployeeController.employees_get_all);

module.exports = router;
