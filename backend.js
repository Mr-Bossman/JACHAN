const express = require('express');
const app = express();
const fs = require('fs');
const request = require("request");

var sitemap = ["robots.txt","assets/fonts/fontawesome5-overrides.min.css","assets/js/theme.js","favicon.png","assets/css/main.css",""];

fs.readdirSync('./blogs/').forEach(file => {
	app.get('/' + file, (req, res, next) => {
		res.sendFile('./blogs/' + file, { root: __dirname });
	});
	sitemap.push(file);
});

fs.readdirSync('./assets/images/').forEach(file => {
	app.get('/images/' + file, (req, res, next) => {
		res.sendFile('./assets/images/' + file, { root: __dirname });
	});
	sitemap.push('images/' + file);
});

fs.readdirSync('./blogs/').forEach(file => {
	app.get('/' + file.split('.')[0], (req, res, next) => {
		res.sendFile('./main.html', { root: __dirname });
	});
	sitemap.push(file.split('.')[0]);
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

app.get("/robots.txt", (req, res, next) => {
	res.send("User-agent: *\nAllow: /\nSitemap: https://jachan.dev/sitemap.xml");
	res.status(200);
	res.end();
});

function genSiteMap(){
	const lastmod = new Date(Date.now()).toISOString().split("T")[0];
	let response = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">"
	sitemap.forEach(function (URLs){
		response+="<url>\n<loc>https://jachan.dev/"+URLs+"</loc>\n";
		response+="<lastmod>"+lastmod+"</lastmod>\n</url>\n"
	});
	response+="</urlset>"
	app.get("/sitemap.xml", (req, res, next) => {
		res.send(response);
		res.status(200);
		res.end();
	});
}

genSiteMap();
app.listen(8080);
request.get("http://www.google.com/ping?sitemap=https://jachan.dev/sitemap.xml");
request.get("http://www.bing.com/ping?sitemap=https://jachan.dev/sitemap.xml");
