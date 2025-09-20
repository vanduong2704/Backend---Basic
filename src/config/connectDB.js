// Get the client
//import mysql from 'mysql2/promise';
import mysql from "mysql2";
// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic',
});



  export default connection;



