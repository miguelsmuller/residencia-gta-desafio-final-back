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


  async getAll() {
    const sql = `SELECT * from public.restaurants WHERE 1 = 1;`;

    const resultado = await this.dbConnection.query(sql);

    return resultado.rows;
  }
}

