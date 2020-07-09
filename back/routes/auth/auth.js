const express = require("express");
const router = express.Router();

const Auth = require("../../models/Auth");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email, password, name, lastname } = req.body;
  try {
    const signup = await Auth.create({
      email,
      password,
      name,
      lastname,
    });
    res.status(201).json(signup);
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
