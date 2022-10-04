const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers.authentication.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send("Please login to continue");
    } else {
      req.body.id = decoded.id;
      next();
    }
  });
};

module.exports = {
  authentication,
};

