const Orders = require("../db").orders;

exports.create = async (req, res) => {
  // const order = {
  //   username: req.body.username,
  //   email: req.body.email,
  //   avatar: fileLocation,
  //   password: req.body.password,
  //   birthdate: req.body.birthdate,
  // };
  // Save Order in the database
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  res.send(Orders);
};

// Find a single Order with an id
exports.findOne = (req, res) => {};

// Update a Order by the id in the request
exports.update = (req, res) => {};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {};
