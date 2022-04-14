export default class ProductController {
  constructor(productModel) {
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
}
