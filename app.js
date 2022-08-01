const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000; 
// If we deploy then we will use PORT otherwise for local host we wwill use 3000
require('dotenv').config();

// middlewares
// pass url encoded body
app.use(express.urlencoded({ extended: true}));
// create folder for using images effecitiently
app.use(express.static('public'));
app.use(expressLayouts);

// for layouts we need to set a main folder
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//routes
const routes = require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port,()=> console.log('Listening to port ${port}'));


