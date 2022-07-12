module.exports = (app) => {
  const foods = require("../controllers/foods.controller.js");
  const router = require("express").Router();

  router.post("/", foods.create);

  router.get("/", foods.findAll);

  router.get("/:id", foods.findOne);

  router.put("/:id", foods.update);

  router.delete("/:id", foods.delete);

  app.use("/api/foods", router);
};
