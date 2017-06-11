const express = require('express');
const morgan = require('morgan');
const app = express();

//Middleware
app.use(morgan('dev'));

app.get('/',function(req,res){
  res.json('Hi there');
});


app.listen(3000,function(err){
  if (err) throw err;
  console.log("server is runnig on 3000 port");
});
