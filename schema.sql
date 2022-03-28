show databases;

USE employee_tracker;



CREATE TABLE department(
	id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
	id INT PRIMARY KEY,
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

DROP TABLE employee, role, department;
