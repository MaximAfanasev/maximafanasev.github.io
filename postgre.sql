1. Как выглядит PostgreSQL?

PostgreSQL — это сервер, который работает в фоне (как служба). Вы не видите его графического интерфейса (как, например, Excel), но можете управлять им через:

Терминал (команды psql, createdb).
Графические клиенты (DBeaver, pgAdmin, TablePlus).
Приложения (веб-сайты, мобильные приложения подключаются к нему через код).
2. Где физически хранятся данные?

База данных PostgreSQL — это набор файлов на диске. Обычно они находятся в папке:

Linux: /var/lib/postgresql/ (или /usr/local/pgsql/data)
Windows: C:\Program Files\PostgreSQL\<версия>\data
📌 Важно: Сами файлы в data/ нельзя редактировать вручную — только через SQL-запросы!

3. Как подключиться к PostgreSQL?

Способ 1: Через терминал (psql)

bash
psql -U имя_пользователя -d имя_базы -h localhost -p 5432
-U postgres — логин (по умолчанию postgres).
-d mydb — имя базы (если не указать, подключитесь к postgres).
-h — хост (обычно localhost).
-p — порт (по умолчанию 5432).
Пример:

bash
psql -U postgres -d test_db
Способ 2: Через графический клиент (pgAdmin, DBeaver)

Установите pgAdmin.
Укажите хост (localhost), порт (5432), логин/пароль.
4. Как пользователи подключаются к PostgreSQL?

Пользователи (роли) в PostgreSQL создаются через SQL:

sql
CREATE USER dev_user WITH PASSWORD '12345';
Затем им выдаются права:

sql
GRANT ALL ON DATABASE mydb TO dev_user;
📌 Как фронтенд подключается к PostgreSQL?
Фронтенд (JavaScript, Python, PHP и др.) не подключается напрямую к PostgreSQL. Вместо этого:

Бэкенд (Node.js, Django, Flask) принимает запросы от фронтенда.
Бэкенд отправляет SQL-запросы в PostgreSQL.
PostgreSQL возвращает данные бэкенду, который передает их фронтенду.
🔹 Пример кода (Node.js + PostgreSQL):

javascript
const { Pool } = require('pg');
const pool = new Pool({ user: 'dev_user', password: '12345', database: 'mydb' });

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows); // Отправляем данные во фронтенд
});
5. Зачем нужен PostgreSQL?

Хранение данных (пользователи, товары, заказы).
Быстрый поиск (индексы ускоряют запросы).
Безопасность (разграничение прав пользователей).
Целостность данных (например, нельзя удалить пользователя, если у него есть заказы).
6. Основные термины

Таблица — как лист в Excel (например, users, orders).
Строка (Row) — одна запись (например, пользователь id=1, name=Alex).
Столбец (Column) — поле (например, email, password).
SQL — язык запросов (SELECT * FROM users).
Индекс — ускоритель поиска (как оглавление в книге).
Итог для новичка

PostgreSQL — это "программа для баз данных", которая хранит данные в файлах.
Подключаться можно через psql, pgAdmin или код бэкенда.
Фронтенд общается с PostgreSQL через бэкенд (не напрямую!).
Данные хранятся в таблицах, а управляются через SQL.
Если хотите попробовать:

bash
sudo apt install postgresql  # Установка (Linux)
psql -U postgres             # Подключение
CREATE DATABASE test;        # Создание базы
\c test                      # Переключение на неё
CREATE TABLE users (id SERIAL, name TEXT);  # Создание таблицы
INSERT INTO users (name) VALUES ('Alice');  # Добавление данных
SELECT * FROM users;         # Просмотр данных

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



\q

brew services list

brew services start postgresql@15


brew services restart postgresql@14
Stopping `postgresql@14`... (might take a while)
==> Successfully stopped `postgresql@14` (label: homebrew.mxcl.postgresql@14)
==> Successfully started `postgresql@14` (label: homebrew.mxcl.postgresql@14)
bash-5.2$ 

psql -U test -d big if big.sql 

\i big.sql 

SELECT * FROM aircrafts;
 aircraft_code | model | range 
---------------+-------+-------
 773           |       | 11100
 763           |       |  7900
 SU9           |       |  3000
 320           |       |  5700
 321           |       |  5600
 319           |       |  6700
 733           |       |  4200
 CN1           |       |  1200
 CR2           |       |  2700
(9 rows)

SELECT bookings.now();
          now           
------------------------
 2017-08-15 19:00:00+04
(1 row)

SELECT airport_code, city
FROM airports LIMIT 5;
 airport_code | city 
--------------+------
 YKS          | 
 MJZ          | 
 KHV          | 
 PKC          | 
 UUS          | 
(5 rows)

\c

\i big.sql

SELECT airport_code, city
FROM airports
LIMIT 5;
 airport_code |           city           
--------------+--------------------------
 YKS          | Якутск
 MJZ          | Мирный
 KHV          | Хабаровск
 PKC          | Петропавловск-Камчатский
 UUS          | Южно-Сахалинск
(5 rows)

SELECT t.passenger_name,
b.book_date
FROM bookings b
JOIN tickets t
ON t.book_ref = b.book_ref
JOIN boarding_passes bp
ON bp.ticket_no = t.ticket_no
JOIN flights f
ON f.flight_id = bp.flight_id
WHERE f.departure_airport ='SVO'
AND f.arrival_airport ='OVB'
AND f.scheduled_departure::date =
bookings.now()::date - INTERVAL'2 day'
AND bp.seat_no ='1A';
  passenger_name   |       book_date        
-------------------+------------------------
 SERGEY SCHERBAKOV | 2017-07-28 21:39:00+04
 SERGEY SCHERBAKOV | 2017-07-28 21:39:00+04
 SERGEY SCHERBAKOV | 2017-07-28 21:39:00+04
 SERGEY SCHERBAKOV | 2017-07-28 21:39:00+04
(4 rows)

SELECT count(*)
FROM flights f
JOIN seats s
ON s.aircraft_code = f.aircraft_code
WHERE f.flight_no ='PG0404'
AND f.scheduled_departure::date =
bookings.now()::date - INTERVAL'1 day'
AND NOT EXISTS (
SELECT NULL
FROM boarding_passes bp
WHERE bp.flight_id = f.flight_id
AND bp.seat_no = s.seat_no
);
 count 
-------
   252
(1 row)

SELECT f.flight_no,
f.scheduled_departure,
f.actual_departure,
f.actual_departure - f.scheduled_departure
AS delay
FROM flights f
WHERE f.actual_departure IS NOT NULL
ORDER BY f.actual_departure - f.scheduled_departure
DESC
LIMIT 10;
 flight_no |  scheduled_departure   |    actual_departure    |  delay   
-----------+------------------------+------------------------+----------
 PG0073    | 2016-09-03 12:50:00+04 | 2016-09-03 17:53:00+04 | 05:03:00
 PG0073    | 2016-09-03 12:50:00+04 | 2016-09-03 17:53:00+04 | 05:03:00
 PG0040    | 2016-10-16 14:45:00+04 | 2016-10-16 19:29:00+04 | 04:44:00
 PG0040    | 2016-10-16 14:45:00+04 | 2016-10-16 19:29:00+04 | 04:44:00
 PG0533    | 2016-10-23 15:55:00+04 | 2016-10-23 20:37:00+04 | 04:42:00
 PG0533    | 2016-10-23 15:55:00+04 | 2016-10-23 20:37:00+04 | 04:42:00
 PG0132    | 2017-05-22 13:25:00+04 | 2017-05-22 18:06:00+04 | 04:41:00
 PG0531    | 2017-05-17 10:15:00+04 | 2017-05-17 14:56:00+04 | 04:41:00
 PG0531    | 2017-05-17 10:15:00+04 | 2017-05-17 14:56:00+04 | 04:41:00
 PG0132    | 2017-05-22 13:25:00+04 | 2017-05-22 18:06:00+04 | 04:41:00
(10 rows)



