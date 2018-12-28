var express = require('express');
var app = express();


//This would be for heroku setup
const path = require('path')
const PORT = process.env.PORT || 3000

//HTML Response
app.get('/', function (req,res) { 
    res.send('<h1>Hello World - Kiran Machhewar</h1>');
});

//JSON response
app.get('/api', function (req,res) { 
    res.json({
        'Name': 'Kiran Machhewar',
        'Email' : 'smachhewar@gmail.com' 
    });
});

app.listen(PORT);


