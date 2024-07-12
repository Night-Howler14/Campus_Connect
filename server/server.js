const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;

const usersRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");
const thingsRoute = require("./routes/thingsRoute");
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/things", thingsRoute);

app.listen(port, () =>
  console.log(`Node/Express Server started on port ${port}`)
);
