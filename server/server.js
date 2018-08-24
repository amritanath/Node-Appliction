const path = require('path');
const express = require('express');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicpath));
// console.log(publicpath);
app.listen(port ,()=>{
  console.log(`SERVER IS UP ON PORT : ${port}`);
})
