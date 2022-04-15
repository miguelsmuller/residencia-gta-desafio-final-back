import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const {DB_HOST, DB_PORT, DB_USER, DB_PASS} = process.env;

const initOptions = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: 'postgres',
};

const dbConnection = new pg.Pool(initOptions);
await dbConnection.connect();

export default dbConnection;
