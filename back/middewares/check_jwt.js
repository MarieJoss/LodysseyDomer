const jwt = require("jsonwebtoken");
const secret = require("../secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, secret, (err, payload) => {
      console.log(payload);
    });
  } else {
    res.status(401).json({
      message: "no token provided",
    });
  }
  next();
};
