const { Router } = require('express');
const RestaurantController = require('./controllers/RestaurantController');

const router = Router();

router.get('/restaurants', RestaurantController.index);
router.post('/restaurants', RestaurantController.store);
router.get('/restaurants/:id', RestaurantController.show);
router.put('/restaurants/:id', RestaurantController.update);
router.delete('/restaurants/:id', RestaurantController.delete);

module.exports = router;