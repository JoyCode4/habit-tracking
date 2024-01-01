const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://joywadhonkar4:12345678J@cluster0.jari4bu.mongodb.net/CN?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the db"));

db.once("open", function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
