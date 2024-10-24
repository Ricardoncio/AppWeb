var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let h1Text = "Restaurante Viva María - El Palo";
  res.render("home", {title: "Principal"});
});
router.get('/celebraciones', function(req, res, next) {
  res.render("celebraciones", {title: "Celebraciones"});
});
router.get('/galeria', function(req, res, next) {
  res.render("galeria", {title: "Galería"});
});
router.get('/contacto', function(req, res, next) {
  res.render("contacto", {title: "Contacto"});
});


module.exports = router;
