/*
https://github.com/mariadb-corporation/mariadb-connector-nodejs
*/

const mariadb = require("mariadb");

mariadb
    .createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "my-secret-pw",
        database: "mysql",
    })
    .then(async (conn) => {
        const rows = await conn.query("SELECT version()");
        console.log(rows);
        conn.end();
    });
