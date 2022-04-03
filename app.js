const db = require("./db/connection");
const inquirer = require("inquirer");
require("console.table");

let roleData;

function setValue(value) {
   roleData = value;
}

const promptUser = () => {
   return inquirer
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
         } else if (answer.mainOption === "Add Employee") {
            console.log("Add Employee");

            // var roleResult;
            db.query(`SELECT * FROM role;`, function (err, results, fields) {
               let roleTitle = [];
               for (var i = 0; i < results.length; i++) {
                  roleTitle.append(results[i]["title"]);
               }
               console.log(roleTitle);
               return inquirer.prompt([
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
               ]);
            });

            // db.query(
            //   `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("test_frist", "test_last", 1, 1);`
            // )
         } else if (answer.mainOption === "View All Roles") {
            console.log("View All Roles");
            db.query("SELECT * FROM `role`", function (err, results, fields) {
               console.log("\n");
               console.table(results);
            });
         } else if (answer.mainOption === "Update Employee Role") {
            console.log("Update Employee Role");
         } else if (answer.mainOption === "Add Role") {
            console.log("Add Role");
            return inquirer
               .prompt([
                  {
                     type: "input",
                     name: "roleName",
                     message:
                        "What is the title of the new role you would like to add? ",
                  },
               ])
               .then((answer) => {
                  var roleName = answer.roleName;
                  db.query(`INSERT INTO role (title) VALUES ("${roleName}");`);
                  console.log("new record added");
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
         } else if (answer.mainOption === "Add Department") {
            console.log("Add Departments");
            return inquirer
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
               });
         } else if (answer.mainOption === "Finish") {
            console.log("Finish");
         }
      })
      .then(() => {
         promptUser();
      });
};

function init() {
   promptUser();
}

init();
