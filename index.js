/**
 * Title: Tour Management System
 * Description: Create a system that contains several endpoints.
 * Author: Md Rakib Mia
 */

/* external imports */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

/* internal imports */
const errorHandler = require("./middlewares/error.middleware");
// const dbConnection = require("./utils/db.util");
const toursRouter = require("./routes/tours.route");
const tourRouter = require("./routes/tour.route");

/* application connection */
const app = express();
const port = process.env.PORT;

/* middleware connection */
app.use(cors());
app.use(express.json());

/* router connection */
app.use("/tours", toursRouter);
app.use("/tour", tourRouter);

/* global error handler */
app.use(errorHandler);

/* DB connection */
// dbConnection();
mongoose
  .connect(process.env.DB_URI, {
    dbName: "tour-management-system",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("TMS connect with MongoDB through Mongoose.");
  });

/* enable backend */
app.get("/", (req, res) => {
  res.status(200).json({
    acknowledgement: true,
    title: "Tour Management System",
    message: "OK",
    description: "TMS request on server working.",
  });
});

/* enable port */
app.listen(port, () => {
  console.log(`TMS listening on port ${port}.`);
});
