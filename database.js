const mysql = require('mysql2');

// Function to create a MySQL connection
const createConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sabin',
    database: 'my_database',
  });

  return connection;
};

module.exports = {
  createConnection,
};
