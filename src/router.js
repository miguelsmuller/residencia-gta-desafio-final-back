import express from 'express';

import dbConnection from './commons/database/dbConnection.js';
import RestaurantModel from './restaurant/models/RestaurantModel.js';
import ProductModel from './restaurant/models/ProductModel.js';
import AdditionalsModel from './restaurant/models/AdditionalsModel.js';

import RestaurantController from './restaurant/controllers/RestaurantController.js';
import ProductController from './restaurant/controllers/ProductController.js';

const router = express.Router();

const restaurantModel = new RestaurantModel(dbConnection);
const restaurantController = new RestaurantController(restaurantModel);

const additionalsModel = new AdditionalsModel(dbConnection);
const productModel = new ProductModel(dbConnection);
const productController = new ProductController(restaurantModel, additionalsModel, productModel);

// POST's Router
router.post('/restaurants', (req, res) => {
  restaurantController.store(req, res);
});

router.post('/products', (req, res) => {
  productController.store(req, res);
});

router.post('/health', (req, res) => {
  res.send();
});

// GET's Router
router.get('/', function(req, res) {
  res.send('home');
});

router.get('/restaurants', (req, res) => {
  restaurantController.getAllRestaurants(req, res);
});

router.get('/restaurants/:idRestaurant', function(req, res) {
  restaurantController.getUniqueRestaurant(req, res);
});

router.get('/restaurants/:idRestaurant/products', function(req, res) {
  restaurantController.getUniqueRestaurantWithProducts(req, res);
});

router.get('/products/:idProduto', function(req, res) {
  productController.getUniqueProduct(req, res);
});

router.get('/products/:idProduto/additionals', function(req, res) {
  productController.getUniqueProductWithAdditionals(req, res);
});

router.use('/*', function(req, res, next) {
  res.sendStatus(404);
  return;
});

export default router;
