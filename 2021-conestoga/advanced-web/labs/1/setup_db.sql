CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    salary INT(10) NOT NULL
);

INSERT INTO employees (id, name, address, salary) VALUES (1, 'Jane Doe', '123 Fake Street', 50000);

SELECT * FROM employees;
