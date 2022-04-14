export default class ProductController {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async getUniqueProduct(req, res) {
    const {idProduto} = req.params;

    const content = await this.productModel.getUniqueProduct(idProduto);

    if (Object.keys(content).length == 0) {
      res.sendStatus(204);
      return;
    }

    res.json(content);
  }

  async getUniqueProductWithAdditionals(req, res) {
    const {idProduto} = req.params;

    const content = await this.productModel.getUniqueProductWithAdditionals(idProduto);

    if (Object.keys(content).length == 0) {
      res.sendStatus(204);
      return;
    }

    res.json(content);
  }
}
