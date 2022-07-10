const { v4 } = require("uuid");

let { foods: Foods } = require("../db");

exports.create = async (req, res) => {
  const newFood = {
    id: v4(),
    duration: req.body.duration,
    name: req.body.name,
    price: +req.body.price,
  };

  Foods.push(newFood);

  res.send(200);
};

exports.findAll = (req, res) => {
  setTimeout(() => {
    res.send(Foods);
  }, 2000);
};

exports.findOne = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const foundFood = Foods.find((food) => food.id === req.params.id);
    if (foundFood) {
      res.send(foundFood);
    } else {
      res.status(404).send("Food was not found");
    }
  }
};

// Update a Order by the id in the request
exports.update = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    Foods = Foods.map((food) => {
      if (food.id === req.params.id) {
        return { ...food, ...req.body, id: req.params.id };
      }
      return food;
    });
    res.status(200).send("Successfully updated Food");
  }
};

exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const index = Foods.findIndex((food) => food.id === req.params.id);
    if (index === -1) {
      res.status(404).send("No Food found with the given ID");
    } else {
      Foods.splice(index, 1);
      res.status(200).send("Successfully deleted Food");
    }
  }
};
