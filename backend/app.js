const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
const route =require('./routing/seat.js')

mongoose
  .connect('mongodb://localhost:27017/Study_Center', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/',route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`App running on port ${port}...`);
}); 