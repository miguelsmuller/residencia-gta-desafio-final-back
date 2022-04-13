import express from 'express';

import dbConnection from './commons/database/dbConnection.js';

import RestaurantModel from './restaurant/models/RestaurantModel.js';

import RestaurantController from './restaurant/controllers/RestaurantController.js';

const router = express.Router();

const model = new RestaurantModel(dbConnection);
const controller = new RestaurantController(model);


router.get('/restaurants', (req, res) => {
  controller.getAll(req, res);
});

router.post('/restaurants', (req, res) => {
  // dbConnection.query(`
  // INSERT INTO restaurants (name, owner, address, description, image)
  // VALUES (name1, owner1, add1, description1, image1)
  // RETURNING *`,
  // (err, result)=>{
  //   if (!err) {
  //     res.send(result.rows);
  //   }
  // });
});

// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.get('/', function(_, res) {
  res.send('home');
});

router.post('/health', (_, res) => {
  res.send();
});

router.get('/restaurants/:idRestaurant', function(_, res) {
  res.send('{GET} RESTAURANTE ESPECIFICO');
});

router.get('/restaurants/:idRestaurant/products', function(_, res) {
  res.send('{GET} PRODUTOS DE UM RESTAURANTE ESPECIFICO');
});

router.get('/restaurants/:idRestaurant/products/:idProduto', function(_, res) {
  res.send('{GET} DADOS DE UM PRODUTO UNICO');
});

router.get('/restaurants/:idRestaurant/products/:idProduto/extras', function(_, res) {
  res.send('{GET} EXTRAS DE UM PRODUTO UNICO');
});

router.post('/restaurants/:idRestaurant/products/', function(_, res) {
  res.send('{POST} SALVAR PRODUTO EM UM RESTAURANTE');
});

export default router;
