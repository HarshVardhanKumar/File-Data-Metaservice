// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fileupload = require('express-fileupload') ;
var multer = require('multer') ;
var upload = multer({dest: 'uploads/'})
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
 
app.post('/upload', upload.single('file') ,function(req, res) {
  let sampleFile = req.file;
  var object = {} ;
  object.Name = sampleFile.originalname ;
  object.size = sampleFile.size ;
  object.encoding = sampleFile.encoding ;
  object.mimetype = sampleFile.mimetype ;
  res.send(object) ;
  
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
