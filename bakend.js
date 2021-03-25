const express = require('express');
const app = express();




app.get('/', (req, res, next) => {
  res.sendfile('./main.html');
})
app.get('/assets/fonts/fontawesome5-overrides.min.css', (req, res, next) => {
  res.sendfile('./assets/fonts/fontawesome5-overrides.min.css');
})
app.get('/assets/js/theme.js', (req, res, next) => {
  res.sendfile('./assets/js/theme.js');
})
app.get('/assets/css/untitled.css', (req, res, next) => {
  res.sendfile('./assets/css/untitled.css');
})
app.get('/assets/css/Button-Outlines---Pretty.css', (req, res, next) => {
  res.sendfile('/assets/css/Button-Outlines---Pretty.css');
})
app.get('/bootstrap/css/bootstrap.min.css', (req, res, next) => {
  res.sendfile('./bootstrap/css/bootstrap.min.css'');
})
app.get('/main', (req, res, next) => {
  res.sendfile('./main.txt'');
})

app.listen(80);
