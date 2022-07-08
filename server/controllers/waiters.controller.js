let { waiters: Waiters } = require("../db");
const v4 = require("uuid").v4;

exports.create = async (req, res) => {
  const fileName = Date.now() + req.files.avatar.name;
  req.files.avatar.mv(
    `${__dirname}/../public/avatar/${fileName}`,
    function (err) {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
      } else {
        const newWaiter = {
          id: v4(),
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          gender: req.body.gender,
          birthdate: req.body.birthdate,
          avatar: fileName,
        };

        Waiters.push(newWaiter);

        res.send("Successfully created new waiter");
      }
    }
  );
};

exports.findAll = (req, res) => {
  res.send(Waiters);
};

exports.findOne = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const foundWaiter = Waiters.find((waiter) => waiter.id === req.params.id);
    if (foundWaiter) {
      res.send(foundWaiter);
    } else {
      res.status(404).send("Waiter was not found");
    }
  }
};

exports.update = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    Waiters = Waiters.map((waiter) => {
      if (waiter.id === req.params.id) {
        return { ...waiter, ...req.body, id: req.params.id };
      }
      return waiter;
    });
    res.status(200).send("Successfully updated Waiter");
  }
};

exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id was not provided");
  } else {
    const index = Waiters.findIndex((waiter) => waiter.id === req.params.id);
    if (index === -1) {
      res.status(404).send("No Waiter found with the given ID");
    } else {
      Waiters.splice(index, 1);
      res.status(200).send("Successfully deleted Waiter");
    }
  }
};
