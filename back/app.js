require("dotenv").config();
// je déclare l'ensemble des librairies nécessaires
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const sequelize = require("./sequelize");
const PORT = process.env.PORT || 5000;

const authRouter = require("./routes/auth/auth");

// je configure l'application
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});
sequelize
  .sync({ force: true })
  .then(() => {
    return sequelize.authenticate();
  })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err.message);
      }
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("unable to join database", err.message);
  });
