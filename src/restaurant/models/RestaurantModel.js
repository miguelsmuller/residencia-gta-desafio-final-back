export default class RestaurantModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(restaurant) {
    const {
      name, owner, address, description, image,
    } = restaurant;
    const result = await this.dbConnection.query(
        `
      INSERT INTO restaurants (name, owner, address, description, image)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
          `, [name, owner, address, description, image]);
    return result;
  }


  async getAllRestaurants() {
    const sqlQuery = `SELECT * from public.restaurants WHERE 1 = 1;`;

    const results = await this.dbConnection.query({
      text: sqlQuery,
    });

    return results.rows;
  }


  async getUniqueRestaurant(idRestaurant) {
    const sqlQuery = `SELECT r.id, r.name, r.owner, r.address, r.description, r.image FROM restaurants r WHERE id = $1;`;

    const resultQuery = await this.dbConnection.query({
      text: sqlQuery,
      values: [idRestaurant],
    });

    return resultQuery.rows[0];
  }


  async getUniqueRestaurantWithProducts(idRestaurant) {
    const restaurant = await this.getUniqueRestaurant(idRestaurant);
    const products = await this.getProductsFromRestaurant(idRestaurant);

    return [restaurant, products];
  }


  async getProductsFromRestaurant(idRestaurant) {
    const sqlQuery = `SELECT p.id, p.name, p.description, p.price, p.image
    FROM products p
    JOIN restaurants r ON p.id_restaurant = r.id
    WHERE r.id = $1;`;

    const resultQuery = await this.dbConnection.query({
      text: sqlQuery,
      values: [idRestaurant],
    });

    return resultQuery.rows;
  }
}

