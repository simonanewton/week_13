DROP DATABASE IF EXISTS mq8pybelltz0e8tk;
CREATE database mq8pybelltz0e8tk;

USE mq8pybelltz0e8tk;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Hamburger", true), ("Cheeseburger", false), ("Bacon Burger", false);
