CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
	ID INT AUTO_INCREMENT,
	burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (ID)
);