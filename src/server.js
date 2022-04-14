import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const {SERVER_PORT} = process.env;


app.listen(SERVER_PORT, () => {
  console.log(`Server started at port ${SERVER_PORT}`);
});
