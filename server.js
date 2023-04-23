const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.js");
const app = express();
require("dotenv").config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRouter);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established");
    app.listen(process.env.PORT || 9000, () => {
      console.log(`Server is running at port ${9000} `);
    });
  })
  .catch((err) => {
    console.log("Database co", err);
  });
