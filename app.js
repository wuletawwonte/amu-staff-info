const express = require('express');
const app = express();

const employeeRoutes = require('./api/routes/employees');

// a middleware for passing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencodedapp.use(express.urlencoded({extended: true}));
app.use('/employee', employeeRoutes);

module.exports = app;

