PostgreSQL реализованы различные способы индексирования
Hash
GiST
SP-GiST
GIN
RUM
BRIN
Bloom

Кроссплатформенность
Linux, FreeBSD, Solaris и macOS, а также на Windows

Расширяемость
 типы данных;
• функции и операторы для работы с новыми типами;
• индексные и табличные методы доступа;
• языки серверного программирования;
• подключения к внешним источникам данных (Foreign
Data Wrappers);
• загружаемые расширения.

Доступность

Независимость


подключение

psql -d postgres

CREATE DATABASE test;

\c test
You are now connected to database "test" as user "test"

all commands
\?

CREATE TABLE courses (
    c_no text PRIMARY KEY,
    title text,
    hours integer
);

INSERT INTO courses(c_no, title, hours)
VALUES ('CS301'
,
'Базы данных', 30),
('CS305'
,
'Сети ЭВМ', 60);


CREATE TABLE students(
s_id integer PRIMARY KEY,
name text,
start_year integer
);


INSERT INTO students(s_id, name, start_year)
VALUES (1451,'Анна', 2014),
(1432,'Виктор', 2014),
(1556,'Нина', 2015);
INSERT 0 3

CREATE TABLE exams(
s_id integer REFERENCES students(s_id),
c_no text REFERENCES courses(c_no),
score integer,
CONSTRAINT pk PRIMARY KEY(s_id, c_no)
);

INSERT INTO exams(s_id, c_no, score)
VALUES (1451,'CS301', 5),
(1556,'CS301', 5),
(1451,'CS305', 5),
(1432,'CS305', 4);

SELECT title AS course_title, hours
FROM courses;

 course_title | hours 
--------------+-------
 Базы данных  |    30
 Сети ЭВМ     |    60
(2 rows)

SELECT * FROM courses;
 c_no  |    title    | hours 
-------+-------------+-------
 CS301 | Базы данных |    30
 CS305 | Сети ЭВМ    |    60
(2 rows)

SELECT * FROM exams;
 s_id | c_no  | score 
------+-------+-------
 1451 | CS301 |     5
 1556 | CS301 |     5
 1451 | CS305 |     5
 1432 | CS305 |     4
(4 rows)

SELECT start_year FROM students;
 start_year 
------------
       2014
       2014
       2015
(3 rows)

