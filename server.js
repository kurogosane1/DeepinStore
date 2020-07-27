const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('../DeepinStore/config/controller');

const app = express();
const api = require('./Routes/Router');
const PORT = process.env.PORT || 3500;
const db = require('./models/schema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('', api);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('app/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'));
	});
}

db.sync()
	.then(result => {
		console.log(result);
		app.listen(PORT, () => {
			console.log(`Listening at ${PORT}`);
		});
	})
	.catch(err => {
		console.log(err);
		console.log('this is the error section');
	});

// db.Sales.sync()
// 	.then(result => {
// 		console.log(result);
// 		app.listen(PORT, () => {
// 			console.log(`Listening at ${PORT}`);
// 		});
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		console.log('this is the error section');
// 	});

// db.User.sync()
// 	.then(result => {
// 		console.log(result);
// 		app.listen(PORT, () => {
// 			console.log(`Listening at ${PORT}`);
// 		});
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		console.log('this is the error section');
// 	});
