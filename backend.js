const express = require('express');
const app = express();

const testFolder = './blogs/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
	app.get('/' + file, (req, res, next) => {
		res.sendFile('./blogs/' + file, { root: __dirname });
	});
});

fs.readdirSync(testFolder).forEach(file => {
	app.get('/' + file.split('.')[0], (req, res, next) => {
		res.sendFile('./main.html', { root: __dirname });
	});
});

app.get('/', (req, res, next) => {
	res.sendFile('./main.html', { root: __dirname });
});

app.get('/favicon.png', (req, res, next) => {
	res.sendFile('./favicon.png', { root: __dirname });
});

app.get('/assets/fonts/fontawesome5-overrides.min.css', (req, res, next) => {
	res.sendFile('./assets/fonts/fontawesome5-overrides.min.css', { root: __dirname });
});

app.get('/assets/js/theme.js', (req, res, next) => {
	res.sendFile('./assets/js/theme.js', { root: __dirname });
});

app.get('/assets/css/main.css', (req, res, next) => {
	res.sendFile('./assets/css/main.css', { root: __dirname });
});

app.listen(8080);
