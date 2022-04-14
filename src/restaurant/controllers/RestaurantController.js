import Yup from 'yup';
export default class RestaurantController {
  constructor(restaurantModel) {
    this.restaurantModel = restaurantModel;
  }

  async store(req, res) {
    const validator = Yup.object().shape({
      name: Yup.string().required().max(50),
      owner: Yup.string().required().max(50),
      address: Yup.string().required().max(50),
      description: Yup.string().required().max(255),
      image: Yup.string().required().url(),
    });

    if (!validator.isValidSync(req.body)) {
      res.sendStatus(422);
      return;
    }

    const {
      name, owner, address, description, image,
    } = req.body;

    const newRestaurant = {
      name, owner, address, description, image,
    };

    const restaurantId = await this.restaurantModel.create(newRestaurant);
    res.setHeader('Location', `/restaurants/${restaurantId}`);
    res.sendStatus(201);
  }


  async getAllRestaurants(_, res) {
    const response = await this.restaurantModel.getAllRestaurants();

    res.json(response);
  }


  async getUniqueRestaurant(req, res) {
    const {idRestaurant} = req.params;

    const content = await this.restaurantModel.getUniqueRestaurant(idRestaurant);

    if (!content) {
      res.sendStatus(204);
      return;
    }

    res.json(content);
  }


  async getUniqueRestaurantWithProducts(req, res) {
    const {idRestaurant} = req.params;

    const content = await this.restaurantModel.getUniqueRestaurantWithProducts(idRestaurant);

    const restaurant = content[0];
    const products = content[1];

    if (!restaurant || !products) {
      res.sendStatus(204);
      return;
    }

    const returnFormatad = {
      ...restaurant,
      products: products,
    };

    res.json(returnFormatad);
  }


  //   show(req, res) {
  //   const {id} = req.params;

  //   const restaurant = resta
  // urants.find((restaurant) => restaurant.id === +id);

  //   if (!restaurant) {
  //       res.sendStatus(404);
  //       return;
  //   }

  //   res.json(restaurant);
  // }

  // update(req, res) {
  //   const {params, body} = req;

  //   const restaurantIndex = restaurants.findIndex(
  //     (restaurant) => restaurant.id === +params.id);
  //   if (restaurantIndex < 0) {
  //       res.sendStatus(404);
  //       return;
  //   }

  //   restaurants[restaurantIndex] = {
  //       id: +params.id,
  //       ...body,
  //   };

  //   res.send();
  // }

  // delete(req, res) {
  //   const {id} = req.params;

  //   const restaurantIndex = restaurants.findIndex(
  //     (restaurant) => restaurant.id === +id);
  //   if (restaurantIndex < 0) {
  //       res.sendStatus(404);
  //       return;
  //   }

  //   restaurants.splice(restaurantIndex, 1);
  //   res.send();
  // }
}
