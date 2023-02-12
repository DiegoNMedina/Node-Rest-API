CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) DEFAULT NULL,
    salary VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'Diego', '1000'),
    (2, 'Andrea', '2000'),
    (3, 'John', '3000'),
    (4, 'Renata', '4000'),
    (5, 'Slinky', '5000');

