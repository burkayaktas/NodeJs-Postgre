CREATE DATABASE firstapi;

\l

\c firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('burkay', 'mburkayaktas@gmail.com'),
    ('mustafa', 'deneme@gmail.com');

select * from users;