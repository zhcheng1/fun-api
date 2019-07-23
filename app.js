'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// var http = require('http');
// var fs = require('fs');
// var path = require('path');
// var url = require('url');

// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const MongoUrl = 'mongodb://localhost:27017/main';

// // Create a new MongoClient
// const client = new MongoClient(url);


// /*
// MongoClient.connect(MongoUrl, function(err, db) {
// 	if (err) {
// 		console.log(err);
// 		db.close();
// 		return;
// 	}

// 	db.collection('user').insertOne({
// 		"name": "nodejs",
// 		"age": "10"
// 	}, function(err, res) {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}


// 	});

// 	db.close();
// })



// var getFileTypeModule = require('./src/modules/getFileType.js');

// http.createServer(function(req, resp) {
// 	var pathname = url.parse(req.url).pathname;
// 	console.log(pathname);
// 	if (pathname == "/") {
// 		pathname = "/index.html";
// 	}
// 	fs.readFile('web/' + pathname, function(error, data) {
// 		if (error) {
// 			resp.write("404");
// 			resp.end();
// 		} else {
// 			var fileType = getFileTypeModule.getFileType(path.extname(pathname));

// 			resp.writeHead(200, {"Content-Type": fileType + ";chartset='utf-8'"});
// 			resp.write(data);
// 			resp.end();
// 		}
// 	});

// }).listen(8001);
// */


// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// const app = express();
// const port = process.env.PORT || 8080;



// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.use(cookieParser());

// app.use(session({
// 	secret: 'big cat',
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: {
// 		secure: false,
// 		maxAge: 1800000,
// 	}, // only https
// 	rolling: true,
// 	store: new MongoStore({
// 		url: MongoUrl,

// 	})
// }));



// const personRoute = require('./src/routes/person');

// app.get('/', (req, res) => {

// 	res.send('Hello World!')
// })



// app.use(personRoute);

// // static files service
// app.use(express.static(path.join(__dirname, 'web')));

// app.use((req, res, next) => {
//   res.status(404).send("Not found");
// });

// // error handler, match all fallback
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;

//   // render the error page
//   res.status(err.status || 500);
//   res.render(err.status);
// });


// app.listen(port, () => console.log(`App listening on port ${port}!`));