import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const {DB_HOST} = process.env;

const initOptions = {
  host: DB_HOST,
  port: 5432,
  user: 'admin',
  password: 'admin',
  database: 'postgres',
};

const dbConnection = new pg.Pool(initOptions);
await dbConnection.connect();

export default dbConnection;
