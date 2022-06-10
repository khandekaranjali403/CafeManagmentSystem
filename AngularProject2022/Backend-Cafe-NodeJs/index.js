const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const app = express();
const userRoutes = require('./routes/user')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('./user',userRoutes);

module.export = app;