console.log("Application starting...");
var express = require('express');
var favicon = require('serve-favicon')
const path = require('path');
var app = express();
// todo favicon
// todo tutCom cacher h1 sur le logo, google font effect

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set('view engine','pug');
app.set('views','./views');


app.use(express.static('./public'));

app.get('/', function (req, res) {
	res.render('index', { title: 'Home' })
});

app.listen(process.env.PORT || 3000, function functionName() {
  console.log("Listening on http://localhost:3000");
})
