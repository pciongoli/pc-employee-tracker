USE employee_tracker;

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;

INSERT INTO department VALUES (1, "Engineering");
INSERT INTO department VALUES (2, "Financial");
INSERT INTO department VALUES (3, "Legal");
INSERT INTO department VALUES (4, "Tax");

INSERT INTO role VALUES (1, "Sale Lead", 80000, 4);
INSERT INTO role VALUES (2, "Lead Engineer", 180000, 1);
INSERT INTO role VALUES (3, "Lawyer", 120000, 3);
INSERT INTO role VALUES (4, "Account Manager", 80000, 2);


INSERT INTO employee VALUES (1, "Patrick", "Ciongoli", 1, 1);
INSERT INTO employee VALUES (2, "Bryan", "Nguyen", 1, 4);
INSERT INTO employee VALUES (3, "Anna", "K", 3, 2);
INSERT INTO employee VALUES (4, "Joe", "B", 3, 1);
INSERT INTO employee VALUES (5, "Lowie", "Smith", 3, 4);
INSERT INTO employee VALUES (6, "Frankie", "J", 1, 3);
