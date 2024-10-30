var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");

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
router.post('/contacto', function(req, res, next) {
  console.log(req.body);
  datos.addContacto(req.body.nombre, req.body.email, req.body.mensaje, req.body.info);
  res.redirect("/contacto");
});
router.get('/getContactos', function(req, res, next) {
  res.send(datos.getAllContactos());
});
router.get('/carta/:id', function(req, res, next){
  const plato = datos.getItemCarta(req.params.id);
  res.send(plato);
});
router.get('/login', function(req, res, next){
  res.render("login", {title: "Log in"});
});
router.post('/login', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  let user = datos.validateUser(email, password);
  
  if (user) {
    req.session.login = true;
    req.session.user = user;
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
  
});
router.get('/admin', function(req, res, next){
  if (req.session.login) {
    res.render("admin", {title: "Administración", user: req.session.user, contactos: datos.getAllContactos()});
  } else {
    res.redirect("/login");
  }
});
router.get('/logout', function(req, res, next){
  req.session.login = false;
  req.session.user = null;
  res.redirect("/");
});
 


module.exports = router;
