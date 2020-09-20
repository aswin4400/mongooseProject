const express = require('express');

const app = express();

const postsRoute = require('./posts')
//middleware

//routes
app.use('/posts',postsRoute);
app.get('/',(req,res) => {
res.send('We are  on home');

});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demodb',{ useNewUrlParser: true },()=>{console.log("Connected to Db")});
app.listen(3000);
