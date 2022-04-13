/* eslint-disable max-len */
/* eslint-disable new-cap */

const express = require('express');
const router = express.Router();

// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get('/', function(req, res) {
  res.send('home');
});

router.post('/health', (_, res) => {
  res.send();
});

router.get('/restaurants', function(req, res) {
  res.send('{GET} LISTA RESTAURANTES');
});

router.get('/restaurants/:idRestaurant', function(req, res) {
  res.send('{GET} RESTAURANTE ESPECIFICO');
});

router.get('/restaurants/:idRestaurant/products', function(req, res) {
  res.send('{GET} PRODUTOS DE UM RESTAURANTE ESPECIFICO');
});

router.get('/restaurants/:idRestaurant/products/:idProduto', function(req, res) {
  res.send('{GET} DADOS DE UM PRODUTO UNICO');
});

router.get('/restaurants/:idRestaurant/products/:idProduto/extras', function(req, res) {
  res.send('{GET} EXTRAS DE UM PRODUTO UNICO');
});

router.post('/restaurants', function(req, res) {
  res.send('{POST} SALVA UM RESTAURANTE');
});

router.post('/restaurants/:idRestaurant/products/', function(req, res) {
  res.send('{POST} SALVAR PRODUTO EM UM RESTAURANTE');
});

module.exports = router;
