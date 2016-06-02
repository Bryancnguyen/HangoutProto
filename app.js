var express = require('express');
var app = express();
var router = express.Router();
//var port = process.env.PORT || 1200;


app.use(express.static('public'));
app.get('/', function(req, res)
{
   res.sendFile('./public/index.html');
});

app.listen(5000, function()
{
    console.log('App is running');
});

