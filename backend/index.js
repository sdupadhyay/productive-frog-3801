const express = require("express");
const { connection } = require("./Configs/db");
const cors = require("cors");
const { userController } = require("./routes/user.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`listening on port ${process.env.PORT}`);
});
