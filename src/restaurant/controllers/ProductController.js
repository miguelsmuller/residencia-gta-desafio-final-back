import Yup from 'yup';
export default class ProductController {
  constructor(restaurantModel, extraModel, productModel) {
    this.restaurantModel = restaurantModel;
    this.extraModel = extraModel;
    this.productModel = productModel;
  }

  async getUniqueProduct(req, res) {
    const {idProduto} = req.params;

    const content = await this.productModel.getUniqueProduct(idProduto);

    if (!content) {
      res.sendStatus(204);
      return;
    }

    res.json(content);
  }

  async getUniqueProductWithAdditionals(req, res) {
    const {idProduto} = req.params;

    const content = await this.productModel.getUniqueProductWithAdditionals(idProduto);

    const product = content[0];
    const additionals = content[1];

    if (!product || !additionals) {
      res.sendStatus(204);
      return;
    }

    const returnFormatad = {
      ...product,
      additionals: additionals,
    };

    res.json(returnFormatad);
  }

  async store(req, res) {
    const validator = Yup.object().shape({
      name: Yup.string().required().max(50),
      price: Yup.number().required().positive(),
      description: Yup.string().required().max(255),
      image: Yup.string().required().url(),
      idRestaurant: Yup.number().required().positive(),
    });

    if (!validator.isValidSync(req.body)) {
      res.sendStatus(422);
      return;
    }
    const {
      name, description, price, image, extras, idRestaurant,
    } = req.body;

    // const isRestaurantExists = await this.restaurantModel.getById(idRestaurant);

    // if (!isRestaurantExists) {
    //   return response.status(404).json({ error: 'Restaurant not found' });
    // }
    const newProduct = {
      name, description, price, image, idRestaurant,
    };
    const newExtras = extras;

    const productId = await this.productModel.create(newProduct);
    let extrasResult = 0;
    if (extras?.length>0) {
      extrasResult = await this.extraModel.createMany(newExtras);
    }
    res.set({'Location': `/products/${productId}`})
        .status(201)
        .send(`{"prduct_created": true, "extras_inserted": ${extrasResult}}`);
  }
}
