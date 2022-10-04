const { Router } = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/UserModel");


const userController = Router();
userController.post("/signup", async (req, res) => {
  const { email, name, password, currency } = req.body;
  bcrypt.hash(password, 6, async (err, hash) => {
    if (err) {
      res.status(500).send("something went wrong, please try again later");
    } else {
      const new_user = new UserModel({ email, name, password, currency });
      await new_user.save();
      res.status(201).send("Signup successful");
    }
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        res.status(500).send("something went wrong, please try again later");
      } else {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        res.status(200).send({ msg: "Login successful!", token });
      }
    });
  } else {
    res.status(401).send("Please signup to continue!");
  }
});

module.exports = {
  userController,
};
