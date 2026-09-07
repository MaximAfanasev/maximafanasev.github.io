/* comment
*/

SELECT
	Name
	LastName
  Name AS 'First Name'
	Name AS [Last Name]
	Name AS Name
	Name AS [Naming Name]
	Total + 10 AS plus
	Total - 10 AS sub
	Total / 10 AS divis
	Total * 10 AS Milty
	Total % 10 AS Modul
	FirstName || LastName
	FirstName || ' ' || LastName
	
FROM
	customers
	
ORDER BY
	Name DESC (z -> a)
	Name ASC (a -> z)
	
HAVING
	AVG(Total) > 5

WHERE
	Total = 1.98
	City = 'Tucson'
	
	Total IN (1.98, 3.96)
	City IN ('a', 'b', 'c')
	
	City LIKE 'T%' 
	City LIKE '%T'
	City LIKE '%T%'
	City LIKE 'T%T'
	
	City NOT LIKE '%T'
	
	Date = '2009-01-03'
	DATE(Date) = '2009-01-03'
	DATE(Date) > '2010-01-02' AND Total < 3
	
	City LIKE 'p%' OR City LIKE 'd%'
	Total > 1.98 AND (City LIKE 'p%' OR City LIKE 'd%')
	
LIMIT 10

##########################################

CASE
	WHEN TOTAL < 2.00 THEN 'Purchase'
	WHEN TOTAL BETWEEN 2.00 AND 6.99 THEN 'Low'
	ELSE 'Top'
	END AS PurcaseType

##########################################

SELECT *
FROM
	invoices
INNER JOIN
	customers
ON
	invoices.CustomerId = customers.CustomerId

SELECT *
FROM
	invoices AS i
INNER JOIN
	customers AS c
ON i.CustomerId = c.CustomerId

SELECT
	i.InvoiceId,
	c.CustomerId
FROM
	invoices AS i
INNER JOIN
	customers AS c
ON i.CustomerId = c.CustomerId

SELECT * 
FROM invoices AS i
LEFT OUTER JOIN customers AS c
ON i.CutomerId = c.CustomerId

SELECT * 
FROM invoices AS i
RIGHT OUTER JOIN customers AS c
ON i.CutomerId = c.CustomerId

WHERE
	al.Artistid IS NULL

##########################################

SELECT
	COUNT(LastName) AS [NameCount]

AVG
COUNT
MAX
MIN
SUM

INSTR
LENGTH
LOVER
LTRIM
REPLACE
RTRIM
SUBSTR
TRIM
UPPER

DATE
DATETIME
JULIANDAY
STRFTIME
TIME
'NOW'

##########################################

ПРЕДСТАВЛЕНИЕ
DML