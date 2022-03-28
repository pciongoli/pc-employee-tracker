var mysql2 = require('mysql2');

var inquirer = require('inquirer');



const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker'
});

function run() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainOption",
            message: "Please select what you would like to do",
            choices: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department", "Finish"]
        }
        .then(function (answer) {
            if (answer.mainOption === "View All Employees") {
                console.log("View All Employees");
            }
            else if (answer.mainOption === "Add Employee") {
                console.log("Add Employee")
            }
            else if (answer.mainOption === "View All Roles") {
                console.log("View All Roles")
            }
            else if (answer.mainOption === "Add Role") {
                console.log("Add Role")
            }
            else if (answer.mainOption === "View All Departments") {
                console.log("View All Departments")
            }
            else if (answer.mainOption === "Add Department") {
                console.log("View All Departments")
            }
        })
    ]);
}




run();
