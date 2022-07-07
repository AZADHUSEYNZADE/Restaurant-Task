module.exports = (app) => {
  const orders = require("../controllers/orders.controller.js");
  const router = require("express").Router();
  // Create a new User
  router.post("/", orders.create);

  // Retrieve all Users
  router.get("/", orders.findAll);

  // Retrieve a single User with id
  router.get("/:id", orders.findOne);

  // Update a User with id
  router.put("/:id", orders.update);

  // Delete a User with id
  router.delete("/:id", orders.delete);

  app.use("/api/orders", router);
};
