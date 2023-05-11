// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejwt',
  password: ''
});

connection.connect();
module.exports = connection;
