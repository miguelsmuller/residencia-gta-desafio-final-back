export default class ProductModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(restaurant) {
    console.log('bd> ', db.query);
    const {
      id_restaurant, name, description, price, image,
    } = restaurant;
    const result = await db.query(
        `
      INSERT INTO products (id_restaurant, name, description, price, image)
      VALUES (${id_restaurant}, ${name}, ${description}, ${price}, ${image})
      RETURNING *
          `,
    );
    console.log('result: ', result);
    return result.insertId;
  }


  async getAll() {
    const sql = `SELECT * from public.products WHERE 1 = 1;`;

    const results = await this.dbConnection.query(sql);

    return results.rows;
  }
}

