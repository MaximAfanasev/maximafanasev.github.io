1. Что такое SQL?
SQL (Structured Query Language) — язык структурированных запросов, предназначенный для управления и работы с реляционными базами данных.
Позволяет создавать, изменять, удалять базы данных и таблицы, а также выполнять операции с данными.

2. Основные типы SQL-запросов
DDL (Data Definition Language) — определение структуры базы данных
CREATE — создание таблиц, баз данных, индексов
ALTER — изменение структуры таблиц
DROP — удаление таблиц или баз данных
TRUNCATE — очистка таблицы без удаления структуры
DML (Data Manipulation Language) — работа с данными
SELECT — выборка данных
INSERT — вставка новых записей
UPDATE — обновление существующих записей
DELETE — удаление записей
DCL (Data Control Language) — управление доступом
GRANT — предоставление прав
REVOKE — отзыв прав
TCL (Transaction Control Language) — управление транзакциями
COMMIT — подтверждение транзакции
ROLLBACK — откат транзакции
3. Основные команды SELECT и их использование
SELECT — выборка данных из таблицы

SELECT [столбцы] FROM [таблица] WHERE [условие] ORDER BY [столбец] ASC|DESC LIMIT [число];

-- Выбрать все столбцы из таблицы employees
SELECT * FROM employees;

-- Выбрать имя и возраст сотрудников старше 30 лет
SELECT name, age FROM employees WHERE age > 30;

-- Отсортировать по дате рождения по убыванию и ограничить результат 10 записями
SELECT name, birth_date FROM employees ORDER BY birth_date DESC LIMIT 10;

4. Фильтрация данных: WHERE
Используются логические операторы:
= (равно)
<> или != (не равно)
<, >, <=, >=
BETWEEN ... AND ... (между)
IN (...) (в списке)
LIKE (по шаблону)

SELECT * FROM products WHERE price > 100 AND category = 'Electronics';

SELECT * FROM employees WHERE name LIKE 'A%'; -- имена начинаются на A

SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';

5. Агрегатные функции
Используются для подсчёта и анализа данных:
Функция	Описание	Пример
COUNT()	подсчитывает количество строк	SELECT COUNT(*) FROM employees;
SUM()	сумма значений	SELECT SUM(salary) FROM employees;
AVG()	среднее значение	SELECT AVG(age) FROM employees;
MAX()	максимум	SELECT MAX(price) FROM products;
MIN()	минимум	SELECT MIN(price) FROM products;
Группировка данных: GROUP BY
	
SELECT department_id, COUNT(*) AS num_employees 
FROM employees 
GROUP BY department_id;

Условие для группировки: HAVING
	
SELECT department_id, COUNT(*) AS num_employees 
FROM employees 
GROUP BY department_id 
HAVING COUNT(*) > 10;
6. Объединение таблиц: JOIN
Объединяет данные из нескольких таблиц по общему ключу.
Виды JOIN:
INNER JOIN	возвращает совпадающие записи в обеих таблицах	

SELECT e.name, d.department_name 
FROM employees e 
INNER JOIN departments d ON e.department_id = d.id;
| | LEFT JOIN | все записи из левой таблицы + совпадающие из правой |

SELECT e.name, d.department_name 
FROM employees e 
LEFT JOIN departments d ON e.department_id = d.id;
| | RIGHT JOIN | все записи из правой таблицы + совпадающие из левой |

SELECT e.name, d.department_name 
FROM employees e 
RIGHT JOIN departments d ON e.department_id = d.id;
| | FULL OUTER JOIN | все записи из обеих таблиц + совпадающие где есть |

-- В PostgreSQL поддерживается FULL OUTER JOIN напрямую.
7. Обновление и удаление данных
UPDATE — изменение существующих записей:

UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;

UPDATE employees SET salary = salary * 1.1 WHERE department_id = 3;
DELETE — удаление записей:

DELETE FROM table_name WHERE condition;

DELETE FROM orders WHERE order_date < '2022-01-01';
8. Вставка новых данных: INSERT
Вставка одной записи:

INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);

INSERT INTO products (name, price, category) VALUES ('Laptop', 1200, 'Electronics');
Вставка нескольких записей:

INSERT INTO table_name (column1, column2) VALUES 
(value1a, value2a),
(value1b, value2b),
(value1c, value2c);
9. Создание и изменение структуры базы данных
Создание таблицы:

CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Изменение таблицы: добавление столбца:

ALTER TABLE table_name ADD COLUMN new_column datatype;
Удаление столбца:

ALTER TABLE table_name DROP COLUMN column_name;
Изменение типа столбца:

ALTER TABLE table_name ALTER COLUMN column_name TYPE new_datatype;
10. Индексы и оптимизация запросов
Создание индекса для ускорения поиска:

CREATE INDEX idx_column ON table_name(column);
Удаление индекса:

DROP INDEX idx_column;