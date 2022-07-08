module.exports = (app) => {
  const foods = require("../controllers/foods.controller.js");
  const router = require("express").Router();
  // Create a new User
  router.post("/", foods.create);

  // Retrieve all Users
  router.get("/", foods.findAll);

  // Retrieve a single User with id
  router.get("/:id", foods.findOne);

  // Update a User with id
  router.put("/:id", foods.update);

  // Delete a User with id
  router.delete("/:id", foods.delete);

  app.use("/api/foods", router);
};
