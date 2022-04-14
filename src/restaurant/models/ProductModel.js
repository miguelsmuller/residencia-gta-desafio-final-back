export default class ProductModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async getUniqueProduct(idProduto) {
    const sqlQuery = `SELECT * FROM products WHERE id = ${idProduto};`;

    const resultQuery = await this.dbConnection.query(sqlQuery);

    return resultQuery.rows[0];
  }

  async getUniqueProductWithAdditionals(idProduto) {
    const product = await this.getUniqueProduct(idProduto);
    const additionals = await this.getAdditionalsFromProduct(idProduto);

    return [product, additionals];
  }

  async getAdditionalsFromProduct(idProduto) {
    const sqlQuery = `SELECT a.id, a.name, a.price
    FROM products_extras pe
    JOIN additionals a
    ON pe.id_additional = a.id
    WHERE pe.id_product = ${idProduto};`;

    const resultQuery = await this.dbConnection.query(sqlQuery);

    return resultQuery.rows;
  }
}

