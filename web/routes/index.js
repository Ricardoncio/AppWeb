var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let h1Text = "Restaurante Viva María - El Palo";
  res.render("home", {title: h1Text});
});
router.get('/celebraciones', function(req, res, next) {
  res.redirect("/celebraciones.html");
});
router.get('/galeria', function(req, res, next) {
  res.redirect("/galeria.html");
});
router.get('/contacto', function(req, res, next) {
  res.redirect("/contacto.html");
});


module.exports = router;
