const express = require("express");
const app = express();

const employeeRoutes = require("./api/routes/employees");

// a middleware for passing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencodedapp.use(express.urlencoded({extended: true}));
app.use("/employee", employeeRoutes);

app.use((req, res, next) => {
  const error = new Error("Service Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
