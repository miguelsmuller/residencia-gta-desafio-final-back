export default class ProductModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async getUniqueProduct(idProduto) {
    const sqlQuery = `SELECT p.id, p.id_restaurant, p.name, p.description, p.price, p.image FROM products p WHERE id = ${idProduto};`;

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

  async create(product) {
    const {
      name, description, price, image, idRestaurant,
    } = product;
    const result = await this.dbConnection.query(
        `
        INSERT INTO products (name, description, price, image, id_restaurant)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
            `, [name, description, price, image, idRestaurant]);
    return result.rows[0].id;
  }
}

