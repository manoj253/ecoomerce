const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//Middleware
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/ecommerce',function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Connected to database");
  }
});

app.get('/',function(req,res){
  res.json('Hi there');
});


app.listen(3000,function(err){
  if (err) throw err;
  console.log("server is runnig on 3000 port");
});
