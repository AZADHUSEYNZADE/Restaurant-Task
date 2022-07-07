const express = require("express");
const cors = require("cors");
const { json } = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// importing routes
require("./routes/orders.routes")(app);
require("./routes/orders.routes")(app);

app.listen(process.env.PORT || 3333);

module.exports = app;
