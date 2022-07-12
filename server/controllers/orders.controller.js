const { v4 } = require("uuid");
const { orders: Orders } = require("../db");

exports.create = async (req, res) => {
  const newOrder = {
    id: v4(),
    tableNumber: req.body.tableNumber,
    waiter: req.body.waiterId,
    foods: req.body.foods,
    status: req.body.status,
    createdAt: Date.now(),
  };

  Orders.push(newOrder);
};

exports.findAll = (req, res) => {
  setTimeout(() => {
    res.send(Orders);
  }, 2000);
};

exports.findOne = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const foundOrder = Orders.find((order) => order.id === req.params.id);
    if (foundOrder) {
      res.send(foundOrder);
    } else {
      res.status(404).send("Order was not found");
    }
  }
};

exports.update = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    Orders = Orders.map((order) => {
      if (order.id === req.params.id) {
        return { ...order, ...req.body, id: req.params.id };
      }
      return order;
    });
    res.status(200).send("Successfully updated Order");
  }
};

exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const index = Orders.findIndex((order) => order.id === req.params.id);
    if (index === -1) {
      res.status(404).send("No Order found with the given ID");
    } else {
      Orders.splice(index, 1);
      res.status(200).send("Successfully deleted Order");
    }
  }
};
