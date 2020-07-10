const express = require("express");
const Auth = require("../../models/Auth");
const jwt = require("jsonwebtoken");
const secret = require("../../secret");

const router = express.Router();

router.post("/signup", async (req, res) => {
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

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({
      where: {
        email,
      },
    });

    const isPasswordValid = user.validPassword(password);
    if (user && isPasswordValid) {
      const token = jwt.sign(
        {
          email,
        },
        secret,
        {
          expiresIn: "24h",
        }
      );
      delete user.dataValues.password;
      res.status(200).json({
        token,
        user,
      });
    } else {
      res.status(422).json({
        message: "wrong credentials",
      });
    }
  } catch (error) {
    res.status(422).json({
      message: "wrong credentials",
    });
  }
});

module.exports = router;
