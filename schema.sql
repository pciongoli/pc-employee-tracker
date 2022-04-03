DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;



CREATE TABLE department(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE `role`(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
	FOREIGN KEY (department_id) REFERENCES department(id)
);


CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
manager_id INT,
role_id INT,
PRIMARY KEY (id),
FOREIGN KEY (manager_id) REFERENCES employee(id),
FOREIGN KEY (role_id) REFERENCES role(id)
);

