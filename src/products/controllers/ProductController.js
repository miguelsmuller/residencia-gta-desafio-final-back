export default class ProductController {
  constructor(restaurantModel) {
    this.productModel = productModel;
  }

  async store(req, res) {
    const {
      id_restaurant, name, description, price, image,
    } = req.body;

    const newRestaurant = {
      id_restaurant, name, description, price, image,
    };
    console.log('model: ', ProductModel);

    const productId = await ProductModel.create(newProduct);
    res.setHeader('Location', `/restaurants/${productId}`);
    res.sendStatus(201);
  }


  async getAll(_, res) {
    const response = await this.productModel.getAll();

    res.json(response);
  }
}