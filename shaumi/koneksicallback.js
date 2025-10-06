const mysql = require('mysql2');

// Create the connection to database
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'koneksi',
});

// A simple SELECT query
koneksi.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);