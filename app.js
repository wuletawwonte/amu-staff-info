const express = require('express');
const app = express();

const employeeRoutes = require('./api/routes/employees');

app.use('/employee', employeeRoutes);

module.exports = app;

