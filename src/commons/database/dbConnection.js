import pg from 'pg';


const initOptions = {
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'admin',
  database: 'postgres',
  // connectionString: 'postgresql://user:user@database:5432/postgres',
};

const dbConnection = new pg.Pool(initOptions);
await dbConnection.connect();

export default dbConnection;

//
//
//
//

// const uri = 'postgres://root:root@database:5432/jasons';
// const client = new Client(uri);

// exports.query = async (query, values) => {
//   try{
//     console.log('estou no try')
//     console.log('query: ', query)
//     console.log('values: ', values)
//     const {rows} = await client.query(query, values);
//     console.log('rows: ', rows)

//   return rows;
//   } catch(error){
//     console.log('DEU ERROR')
//     console.error(error)
//   }
// };

