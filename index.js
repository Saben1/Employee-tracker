const inquirer = require('inquirer');
const { createConnection } = require('./database');
const { getAllDepartments, getAllRoles, getAllEmployees } = require('./queries');

// Create a connection to the MySQL database
const connection = createConnection();

// Function to prompt the user with the main menu options
const promptMainMenu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuChoice',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      const { menuChoice } = answers;

      // Perform the corresponding action based on the user's choice
      switch (menuChoice) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end(); // Close the database connection
          break;
        default:
          console.log('Invalid choice');
          break;
      }
    });
};

// Function to view all departments
const viewAllDepartments = () => {
  // Call the appropriate query function to fetch all departments from the database
  getAllDepartments(connection)
    .then((departments) => {
      // Display the departments in a formatted table or any desired format
      console.table(departments);
      promptMainMenu(); // Prompt the main menu again
    })
    .catch((err) => {
      console.error('Error viewing departments:', err);
      promptMainMenu(); // Prompt the main menu again
    });
};

// Function to view all roles
const viewAllRoles = () => {
  // Call the appropriate query function to fetch all roles from the database
  getAllRoles(connection)
    .then((roles) => {
      // Display the roles in a formatted table or any desired format
      console.table(roles);
      promptMainMenu(); // Prompt the main menu again
    })
    .catch((err) => {
      console.error('Error viewing roles:', err);
      promptMainMenu(); // Prompt the main menu again
    });
};

// Function to view all employees
const viewAllEmployees = () => {
  // Call the appropriate query function to fetch all employees from the database
  getAllEmployees(connection)
    .then((employees) => {
      // Display the employees in a formatted table or any desired format
      console.table(employees);
      promptMainMenu(); // Prompt the main menu again
    })
    .catch((err) => {
      console.error('Error viewing employees:', err);
      promptMainMenu(); // Prompt the main menu again
    });
};

// Function to add a department
const addDepartment = () => {
  // Implement the logic to prompt the user for department details and add the department to the database
  // You can use inquirer.prompt() to ask the necessary questions and use the connection.query() method to execute SQL statements
  // After adding the department, prompt the main menu again
  // Remember to handle any errors that
