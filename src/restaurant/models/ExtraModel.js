export default class ExtraModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async createMany(extras) {
    const values = [];
    extras.map((extra)=>{
      values.push(extra.name);
      values.push(extra.price);
    });
    const result = await this.dbConnection.query(`INSERT INTO additionals (name, price) VALUES ${extras.map((_, index) => `($${2*index+1}, $${2*index+2})`).join(',')}`+`;`, values);
    return result.rowCount;
  }
}
