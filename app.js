const db = require("./db/connection");
const inquirer = require("inquirer");
require("console.table");

// call async function
async function promptUser() {
   inquirer
      .prompt([
         {
            type: "list",
            name: "mainOption",
            message: "What would you like to do ?",
            choices: [
               "View All Employees",
               "Add Employee",
               "View All Roles",
               "Update Employee Role",
               "Add Role",
               "View All Departments",
               "Add Department",
               "Finish",
            ],
         },
      ])
      .then(function (answer) {
         if (answer.mainOption === "View All Employees") {
            console.log("View All Employees");
            db.query(
               "SELECT * FROM `employee`",
               function (err, results, fields) {
                  console.log("\n");
                  console.table(results);
               }
            );
            // prompt user again
            promptUser();
         } else if (answer.mainOption === "Add Employee") {
            console.log("Add Employee");
            db.query(
               `SELECT id, first_name, last_name FROM employee`,
               (err, resultEmployee, fields) => {
                  db.query(
                     `SELECT id, title FROM role;`,
                     (err, resultRole, fields) => {
                        let employees = resultEmployee.map(
                           // create array for first_name last_name string
                           (e) => e.id + ". " + e.first_name + " " + e.last_name
                        );
                        let roles = resultRole.map(
                           (t) => t.id + ". " + t.title
                        );

                        console.log(employees);
                        inquirer
                           .prompt([
                              {
                                 type: "input",
                                 name: "firstName",
                                 message: "What is their first name? ",
                              },
                              {
                                 type: "input",
                                 name: "lastName",
                                 message: "What is their last name? ",
                              },
                              {
                                 type: "list",
                                 name: "role",
                                 message: "What is the employee role? ",
                                 choices: roles,
                              },
                              {
                                 type: "list",
                                 name: "manager",
                                 message: "Who is the manager? ",
                                 choices: employees,
                              },
                           ])
                           // extract id and then insert it into the employe
                           .then((answer) => {
                              console.log(
                                 "Selected role idx: " + answer.role[0]
                              );
                              console.log(
                                 "Selected manager idx: " + answer.manager[0]
                              );
                              db.query(
                                 `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("${answer.firstName}", "${answer.lastName}", ${answer.role[0]}, ${answer.manager[0]});`
                              );
                              console.log("New employee added");

                              promptUser();
                           });
                     }
                  );
               }
            );
         } else if (answer.mainOption === "View All Roles") {
            console.log("View All Roles");
            db.query("SELECT * FROM `role`", function (err, results, fields) {
               console.log("\n");
               console.table(results);
            });

            promptUser();
         } else if (answer.mainOption === "Update Employee Role") {
            console.log("Update Employee Role");
         } else if (answer.mainOption === "Add Role") {
            console.log("Add Role");
            db.query(`SELECT * FROM department`, (err, results, fields) => {
               // mapp out array with given results with map.array
               departmentNames = results.map((name) => name.name);
               console.log(departmentNames);
               inquirer
                  .prompt([
                     {
                        type: "input",
                        name: "roleName",
                        message:
                           "What is the title of the new role you would like to add? ",
                     },
                     {
                        type: "input",
                        name: "salary",
                        message: "What is the salary for the role? ",
                     },
                     {
                        type: "list",
                        name: "refDepartmentName",
                        message: "Which department the role belongs to? ",
                        choices: ["1", "2", "3"],
                     },
                  ])
                  .then((answer) => {
                     var roleName = answer.roleName;
                     // db.query(`INSERT INTO role (title) VALUES ("${roleName}");`)
                     console.log("new record added");

                     promptUser();
                  });
            });
         } else if (answer.mainOption === "View All Departments") {
            console.log("View All Departments");
            db.query(
               "SELECT * FROM `department`",
               function (err, results, fields) {
                  console.log("\n");
                  console.table(results);
               }
            );

            promptUser();
         } else if (answer.mainOption === "Add Department") {
            console.log("Add Departments");
            inquirer
               .prompt([
                  {
                     type: "input",
                     name: "departmentName",
                     message: "What is the name of the department? ",
                  },
               ])
               .then((answer) => {
                  var departmentName = answer.departmentName;
                  db.query(
                     `INSERT INTO department (name) VALUES ("${departmentName}");`
                  );
                  console.log("new record added");

                  promptUser();
               });
         } else if (answer.mainOption === "Finish") {
            console.log("Finish");
         }
      });
}

function init() {
   promptUser();
}

init();
