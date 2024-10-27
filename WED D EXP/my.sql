CREATE DATABASE rule_engine;
USE rule_engine;

CREATE TABLE rules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rule_string TEXT NOT NULL,
    ast_json JSON NOT NULL
);

CREATE TABLE attributes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    data_type ENUM('number', 'string', 'boolean') NOT NULL
);

INSERT INTO attributes (name, data_type) VALUES
('age', 'number'),
('department', 'string'),
('salary', 'number'),
('experience', 'number');