export default class ExtraModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async createMany(additionals, idProduct) {
    const values = [];
    additionals.map((additional)=>{
      values.push(additional.name);
      values.push(additional.price);
    });

    const result = await this.dbConnection.query(`
    INSERT INTO additionals (name, price)
    VALUES ${additionals.map((_, index) => `($${2*index+1}, $${2*index+2})`).join(',')}`+
    ` RETURNING *;`,
    values);

    const idsToInsert = [idProduct];
    const sqlInsert = [];
    result.rows.map((row, index)=>{
      idsToInsert.push(row.id);
      sqlInsert.push(`($1, $${index+2})`);
    });

    const relationalResult = await this.dbConnection.query(`
    INSERT INTO products_extras (id_product, id_additional)
    VALUES ${sqlInsert.join(',')}`+
    ` RETURNING *;`, idsToInsert);

    if (!relationalResult) {
      return 'Not possible to create additionals relation';
    }
    return result.rowCount;
  }
}
