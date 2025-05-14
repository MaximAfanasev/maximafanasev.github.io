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

SELECT DISTINCT start_year FROM students;
start_year
------------
2014
2015
(2 rows)


SELECT 2+2 AS result;
 result 
--------
      4
(1 row)

SELECT * FROM courses WHERE hours > 45;
 c_no  |  title   | hours 
-------+----------+-------
 CS305 | Сети ЭВМ |    60
(1 row)

SELECT * FROM courses, exams;
 c_no  |    title    | hours | s_id | c_no  | score 
-------+-------------+-------+------+-------+-------
 CS301 | Базы данных |    30 | 1451 | CS301 |     5
 CS305 | Сети ЭВМ    |    60 | 1451 | CS301 |     5
 CS301 | Базы данных |    30 | 1556 | CS301 |     5
 CS305 | Сети ЭВМ    |    60 | 1556 | CS301 |     5
 CS301 | Базы данных |    30 | 1451 | CS305 |     5
 CS305 | Сети ЭВМ    |    60 | 1451 | CS305 |     5
 CS301 | Базы данных |    30 | 1432 | CS305 |     4
 CS305 | Сети ЭВМ    |    60 | 1432 | CS305 |     4
(8 rows)


SELECT courses.title, exams.s_id, exams.score
FROM courses, exams
WHERE courses.c_no = exams.c_no;
    title    | s_id | score 
-------------+------+-------
 Базы данных | 1451 |     5
 Базы данных | 1556 |     5
 Сети ЭВМ    | 1451 |     5
 Сети ЭВМ 
(4 rows)

SELECT students.name, exams.score
FROM students
JOIN exams
ON students.s_id = exams.s_id
AND exams.c_no ='CS305';
  name  | score 
--------+-------
 Анна   |     5
 Виктор |     4
(2 rows)

Подзапросы

ELECT name,
(SELECT score
FROM exams
WHERE exams.s_id = students.s_id
AND exams.c_no ='CS305')
FROM students;
  name  | score 
--------+-------
 Анна   |     5
 Виктор |     4
 Нина   |      
(3 rows)

Сортировка

SELECT *
FROM exams
ORDER BY score, s_id, c_no DESC;
 s_id | c_no  | score 
------+-------+-------
 1432 | CS305 |     4
 1451 | CS305 |     5
 1451 | CS301 |     5
 1556 | CS301 |     5
(4 rows)

Группировка

SELECT count(*), count(DISTINCT s_id),
avg(score)
FROM exams;
 count | count |        avg         
-------+-------+--------------------
     4 |     3 | 4.7500000000000000
(1 row)


Изменение и удаление данных
UPDATE courses
SET hours = hours * 2
WHERE c_no ='CS301';
UPDATE 1

Транзакции

CREATE TABLE groups(
g_no text PRIMARY KEY,
monitor integer NOT NULL REFERENCES students(s_id)
  
);
CREATE TABLE

ALTER TABLE students
ADD g_no text REFERENCES groups(g_no);
ALTER TABLE


\d students
                Table "public.students"
   Column   |  Type   | Collation | Nullable | Default 
------------+---------+-----------+----------+---------
 s_id       | integer |           | not null | 
 name       | text    |           |          | 
 start_year | integer |           |          | 
 g_no       | text    |           |          | 
 
 
 
 \d
         List of relations
 Schema |   Name   | Type  | Owner 
--------+----------+-------+-------
 public | courses  | table | test
 public | exams    | table | test
 public | groups   | table | test
 public | students | table | test
(4 rows)


BEGIN;
BEGIN


INSERT INTO groups(g_no, monitor)
SELECT 'A-101', s_id
FROM students
WHERE name = 'Анна';
INSERT 0 1
test=*# UPDATE students SET g_no ='A-101';
UPDATE 3
test=*# SELECT * FROM students;
 s_id |  name  | start_year | g_no  
------+--------+------------+-------
 1451 | Анна   |       2014 | A-101
 1432 | Виктор |       2014 | A-101
 1556 | Нина   |       2015 | A-101
(3 rows)

COMMIT;

SELECT * FROM groups;
 g_no  | monitor 
-------+---------
 A-101 |    1451
(1 row)

SELECT * FROM students;
 s_id |  name  | start_year | g_no  
------+--------+------------+-------
 1451 | Анна   |       2014 | A-101
 1432 | Виктор |       2014 | A-101
 1556 | Нина   |       2015 | A-101
(3 rows)
















