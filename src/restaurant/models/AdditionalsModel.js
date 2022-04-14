export default class ExtraModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async createMany(additionals) {
    const values = [];
    additionals.map((additional)=>{
      values.push(additional.name);
      values.push(additional.price);
    });
    const result = await this.dbConnection.query(`INSERT INTO additionals (name, price) VALUES ${additionals.map((_, index) => `($${2*index+1}, $${2*index+2})`).join(',')}`+`;`, values);
    return result.rowCount;
  }
}
