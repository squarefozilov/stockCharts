var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const path = require("path");
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/built'));
  
  app.get("*", (req, res) => {
      res.sendFile(require('path')
          .resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const mongoURI = 'mongodb://<user>:<password1>@ds221405.mlab.com:21405/heroku_0l1zmwm3' || process.env.MONGODB_URI;

mongoose
  .connect(
    mongoURI,
    { 
      useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: true
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)


//app.get("*", (req, res) => {
 // res.sendFile(path.join(__dirname, 'client','build','index.html'));
//});
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
