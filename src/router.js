import express from 'express';

import dbConnection from './commons/database/dbConnection.js';
import RestaurantModel from './restaurant/models/RestaurantModel.js';
import RestaurantController from './restaurant/controllers/RestaurantController.js';

import ProductModel from './restaurant/models/ProductModel.js';
import ProductController from './restaurant/controllers/ProductController.js';

const router = express.Router();

const model = new RestaurantModel(dbConnection);
const controller = new RestaurantController(model);

const mProduct = new ProductModel(dbConnection);
const cProduct = new ProductController(mProduct);

// POST's Router

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

router.post('/restaurants/:idRestaurant/products/', function(req, res) {
  res.send('{POST} SALVAR PRODUTO EM UM RESTAURANTE');
});

router.post('/health', (req, res) => {
  res.send();
});

// GET's Router
router.get('/', function(req, res) {
  res.send('home');
});

router.get('/restaurants', (req, res) => {
  controller.getAllRestaurants(req, res);
});


router.get('/restaurants/:idRestaurant', function(req, res) {
  controller.getUniqueRestaurant(req, res);
});

router.get('/restaurants/:idRestaurant/products', function(req, res) {
  controller.getUniqueRestaurantWithProducts(req, res);
});

router.get('/products/:idProduto', function(req, res) {
  cProduct.getUniqueProduct(req, res);
});

router.get('/products/:idProduto/extras', function(req, res) {
  cProduct.getUniqueProductWithAdditionals(req, res);
});

router.use('/*', function(req, res, next) {
  res.sendStatus(404);
  return;
});

export default router;
