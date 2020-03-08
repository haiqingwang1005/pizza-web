var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/welcome.html');
});

app.get('/welcome.html', function(req, res) {
    res.sendFile(__dirname + '/welcome.html');
});

app.get('/login.html', function(req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/signup.html', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/profile.html', function(req, res) {
    res.sendFile(__dirname + '/profile.html');
});

app.get('/post1.html', function(req, res) {
    res.sendFile(__dirname + '/post1.html');
});

app.get('/post1_edit.html', function(req, res) {
    res.sendFile(__dirname + '/post1_edit.html')
});

app.get('/post_create.html', function(req, res) {
    res.sendFile(__dirname + '/post_create.html')
});

//app.get('/', function(request, response) {
//  response.send('Hello World!')
//});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
