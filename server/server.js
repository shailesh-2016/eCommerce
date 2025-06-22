const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const db = require("./config/db");
db();
const PORT = process.env.PORT || 3000;


///use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
