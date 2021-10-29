const bodyParser = require("body-parser");
const express = require("express");

const app = express();
var dbConnection = require("./db");
var productsRoute = require("./routes/productsRoute");
var userRoute = require("./routes/userRoute");

app.use(bodyParser.json());
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
