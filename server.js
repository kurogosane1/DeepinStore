const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./Routes/Router');
const PORT = process.env.PORT || 3500;
const db = require('./models/schema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('', api);

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
