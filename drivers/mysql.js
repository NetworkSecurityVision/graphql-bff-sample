/*
https://github.com/sidorares/node-mysql2
*/

// get the client
import mysql from "mysql2";

// create the connection to database
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "mysql",
    password: "my-secret-pw",
});

// simple query
conn.query("select version()", function (err, results, fields) {
    if (err) console.log(err);
    else console.log(results);
});
conn.end();
