USE employee_tracker;

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM `role`;

INSERT INTO department (id, department_name)
VALUES 
(1, "Engineering"),
(2, "Financial"),
(3, "Legal"),
(4, "Tax");
SELECT * FROM department;

INSERT INTO `role` (id, title, salary, department_id)
VALUES 
(1, "Sale Lead", 80000, 4),
(2, "Lead Engineer", 180000, 1),
(3, "Lawyer", 120000, 3),
(4, "Account Manager", 80000, 2);
SELECT * FROM `role`;



INSERT INTO employee (id, first_name, last_name, manager_id, role_id)
 VALUES 
(1, "Patrick", "Ciongoli", 1, 1),
(2, "Bryan", "Nguyen", 1, 4),
(3, "Anna", "K", 3, 2),
(4, "Joe", "B", 3, 1),
(5, "Lowie", "Smith", 3, 4),
(6, "Frankie", "J", 1, 3);
SELECT * FROM employee;

