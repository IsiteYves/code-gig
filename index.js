const express = require("express"),
  bodyParser = require("body-parser"),
  db = require("./config/db");

const app = express();

app.use(express.json());

db.authenticate()
  .then(() => console.log("Postgres db connected!"))
  .catch((err) => console.log("DB Connection error: " + err));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to sequelize with node.js!!" });
});

app.use("/api/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
