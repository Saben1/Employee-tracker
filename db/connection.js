const mysql = require('mysql2');

// Create a connection object
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sabin',
  database: 'employee_tracker'
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database');
  }
});

// Export the connection object
module.exports = connection;
