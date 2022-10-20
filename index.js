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
/* application connection */
const app = express();
const port = process.env.PORT;
/* middleware connection */
app.use(cors());
app.use(express.json());