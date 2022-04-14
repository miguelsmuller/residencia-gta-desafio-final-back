export default class RestaurantModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(restaurant) {
    console.log('bd> ', db.query);
    const {
      name, owner, address, description, image,
    } = restaurant;
    // const sql = `
    //   INSERT INTO restaurants (name, owner, address, description, image)
    //   VALUES ($1, $2, $3, $4, $5)
    //   RETURNING *
    //       `;
    const result = await db.query(
        `
      INSERT INTO restaurants (name, owner, address, description, image)
      VALUES (${name}, ${owner}, ${address}, ${description}, ${image})
      RETURNING *
          `,
    );
    console.log('result: ', result);
    return result.insertId;
  }


  async getAllRestaurants() {
    const sql = `SELECT * from public.restaurants WHERE 1 = 1;`;

    const results = await this.dbConnection.query(sql);

    return results.rows;
  }


  async getUniqueRestaurant(idRestaurant) {
    const sqlQuery = `SELECT * FROM restaurants WHERE id = ${idRestaurant};`;

    const resultQuery = await this.dbConnection.query(sqlQuery);

    return resultQuery.rows[0];
  }


  async getUniqueRestaurantWithProducts(idRestaurant) {
    const restaurant = await this.getUniqueRestaurant(idRestaurant);
    const products = await this.getProductsFromRestaurant(idRestaurant);

    return [restaurant, products];
  }


  async getProductsFromRestaurant(idRestaurant) {
    const sqlQuery = `SELECT *
    FROM products p
    JOIN restaurants r ON p.id_restaurant = r.id
    WHERE r.id = ${idRestaurant};`;

    const resultQuery = await this.dbConnection.query(sqlQuery);

    return resultQuery.rows;
  }
}

