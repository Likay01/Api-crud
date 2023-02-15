const mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.pass,
    database: process.env.db_name,
    multipleStatement: true,
});
module.exports = con;