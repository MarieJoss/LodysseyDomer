const express = require("express");
const router = express.Router();

const User = require("../models/User");
const check_jwt = require("../middewares/check_jwt");

router.get("/profile", check_jwt, async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { email, password, name, lastname } = req.body;
  try {
    const user = await User.create({
      email,
      password,
      name,
      lastname,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
