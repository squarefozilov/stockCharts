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
  app.use(express.static("client/build"));
}

/*if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/built'));
  app.get("*", (req, res) => {
    res.sendFile(require('path')
        .resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/built'));
  
  app.get("*", (req, res) => {
      res.sendFile(require('path')
          .resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
*/

//mongoURI = 'mongodb://<dbuser>:<dbpassword>@ds221405.mlab.com:21405/heroku_0l1zmwm3'
//const mongoURI = process.env.MONGODB_URI ||  'mongodb://localhost:27017/mernloginreg' ;
const mongoURI =   process.env.MONGODB_URI || 'mongodb://<user2>:<password2>@ds221405.mlab.com:21405/heroku_0l1zmwm3' ;
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
