const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/lamprecpies", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("conncted to mongooos ");
  })
  .catch((e) => {
    console.error("erroe mongoos ", e);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;