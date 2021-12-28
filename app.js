var express = require('express'); //including express 
var path = require("path");
var bodyParser = require('body-parser');
var app = new express(); // Creating instance 
var port = 4000;  // setting port for the application  
const fs = require('fs');
var router = express.Router();
const fileUpload = require('express-fileupload');
var session = require('express-session')
var sess = {
    secret: "Library",
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(express.static(path.join(__dirname, '/public'))); //making public directory as static diectory
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', './src/views');  //we will tell express that where we will store our views
app.set('view engine', 'ejs');  //we have to tell express; which template engine you are going to use?

fs.readdirSync(__dirname + "/src/routes").forEach(function (file) {
    if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
        return;
    var name = file.substr(0, file.indexOf('.'));
    require('./src/routes/' + name)(app, router);
});
app.listen(port,function(err)
{
	if(typeof(err)=='undefined')
	{
		console.log(process.env.DB_HOST)
		console.log('Your application is running on : ' + port + ' port');
	}
	else
	{
		console.log('Your application is not running Try with another port!!!!');	
	}
});




