const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require("./routes/index");
const db = require("./db/index");
const app = express();

const PORT = process.env.PORT || 5000;

db.on("error", console.error.bind(console, "MongoDB connection error."));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

app.listen(PORT, () => console.log("Listening on Port " + PORT));