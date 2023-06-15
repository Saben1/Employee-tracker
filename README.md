# Employee Tracker

Employee Tracker is a command-line application that allows you to manage departments, roles, and employees in your company. With this application, you can easily view, add, update, and remove employee data, as well as calculate department budgets based on employee salaries.

## Features

- View all departments: See a list of all the departments in your company.
- View all roles: Get an overview of all the roles available in your company.
- View all employees: See a complete list of all the employees, along with their relevant details.
- Add a department: Create a new department and add it to the system.
- Add a role: Define a new role and assign it to a department.
- Add an employee: Enter the details of a new employee and assign them a role and manager.
- Update an employee role: Change the role of an existing employee.
- Remove a department: Delete a department and remove all associated roles and employees.
- Remove a role: Delete a role and reassign its employees to another role.
- Remove an employee: Terminate an employee's employment and remove them from the system.
- Calculate department budgets: Get the total salary budget for a specific department.

## Technologies Used

- Language: JavaScript
- Runtime: Node.js
- Dependencies:
  - `console.table`: version 0.10.0
  - `inquirer`: version 8.2.4
  - `mysql2`: version 3.0.1
  - `express`: version 4.17.1

## Installation

With the package.json file, use jest to excute the tests in the terminal by the following command:
```
npm i
```

Or install all the following dependencices:
```
npm instal console.table

npm install inquirer

npm install mysql2

npm install express
```
For npm scripts:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
```
## Usage

1. Follow the on-screen prompts to navigate through the application and select the desired actions.

2. Use the menu options to view, add, update, or remove departments, roles, and employees.

3. Follow the prompts to enter the required information when adding or updating data.

4. Enjoy managing your company's employee data efficiently!