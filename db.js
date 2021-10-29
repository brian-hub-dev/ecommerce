const mongoose = require("mongoose");

var mongoDB_URL =
  "mongodb+srv://brian:brian123@ecommerce.nlopg.mongodb.net/Ecommerce?retryWrites=true&w=majority";

mongoose.connect(mongoDB_URL, { useNewUrlParser: true });

var dbConnect = mongoose.connection;
dbConnect.on("error", () => {
  console.log(`MongoDb Connection Failed`);
});

dbConnect.on("connected", () => {
  console.log(`MongoDb Connection Successful`);
});
module.exports = mongoose;
