// Get the client
//import mysql from 'mysql2/promise';
// import mysql from "mysql2";
import mysql from 'mysql2/promise';
console.log("creating connection pool...");

// Create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic',
})





export default pool;



