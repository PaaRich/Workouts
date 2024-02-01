require("dotenv").config();
const workOutsRouter = require("./routes/workouts");
const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();

//middlewares

//this middleware helps you to accepts a json data from the request object
//when posting
app.use(express.json());

//the url specified here is a base url to the router provided
app.use("/api/workouts", workOutsRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT, () =>
      console.log(`listening on ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(`Error ${err}`));
