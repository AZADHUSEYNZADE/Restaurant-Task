const express = require("express");
const cors = require("cors");
const { json } = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "/public")));

// importing routes
require("./routes/orders.routes")(app);
require("./routes/waiters.routes")(app);
require("./routes/foods.routes")(app);

app.listen(process.env.PORT || 3333);

module.exports = app;
