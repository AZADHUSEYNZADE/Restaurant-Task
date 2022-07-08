module.exports = (app) => {
  const waiters = require("../controllers/waiters.controller.js");
  const router = require("express").Router();
  // Create a new User
  router.post("/", waiters.create);

  // Retrieve all Users
  router.get("/", waiters.findAll);

  // Retrieve a single User with id
  router.get("/:id", waiters.findOne);

  // Update a User with id
  router.put("/:id", waiters.update);

  // Delete a User with id
  router.delete("/:id", waiters.delete);

  app.use("/api/waiters", router);
};
