var express = require('express');
var app = express();
var port = process.env.PORT || 1200;


app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res)
{
   res.send('Hello World no'); 
});
app.set('view engine', 'ejs');
app.listen(port, function()
{
    console.log('App is running');
});

