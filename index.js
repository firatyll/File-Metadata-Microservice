const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const getRoutes = require("./routes/fileRoutes");

app.use(getRoutes);

app.listen(process.env.PORT , ()=>{
    console.log(`Running on Port ${process.env.PORT}`);
});