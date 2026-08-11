MySQL

SELECT *
FROM
	products
LIMIT 10

/* comment
*/








ABCDF
GHIJK
LMNOP
QRSTW
XYZ

C
F
L
O
S
W

CFL OSW


CASE
FROM
LIMIT
ORDER BY
SELECT
WHERE

INNER JOIN
LEFT INNER JOIN
RIGHT INNER JOIN

SELECT
	AS
		''
		[]

ORDER BY
	DESC
	ASC

WHERE
	= ?
	= '?'
	
	IN (?, ?)
	IN ('?', '?')
	
	LIKE 
		'T%'
		'%T'
		'%T%'
		'T%T'
	
	NOT LIKE 
		'T%'
		'%T'
		'%T%'
		'T%T'
	
	Date = '?-?-?'
	
	DATE(Date) > '?-?-?'
	DATE(Date) > '?-?-?' AND
	DATE(Date) > '?-?-?' OR
	
LIMIT 10


	
	




SELECT
	Name
	LastName
  Name AS 'First Name'
	Name AS [Last Name]
	Email AS EMAIL
	Total AS [Original Amount]
	Total + 10 AS plus
	Total - 10 AS sub
	Total / 10 AS divis
	Total * 10 AS Milty
	Total % 10 AS Modul
	
FROM
	customers
	
ORDER BY
	Name DESC (z -> a)
	Name ASC (a -> z)
	
WHERE
	Total = 1.98
	Total IN (1.98, 3.96)
	City = 'Tucson'
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

CASE
	WHEN TOTAL < 2.00 THEN 'Purchase'
	WHEN TOTAL BETWEEN 2.00 AND 6.99 THEN 'Low'
	ELSE 'Top'
	END AS PurcaseType

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

Функции

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

SELECT 
	FirstName || LastName
	FirstName || ' ' || LastName
SELECT
	City
FROM
	Invoces
Where
	AVG(Total) > 5
GROUP BY
	City
HAVING
	AVG(Total) > 5
ORDER BY
	City

ПРЕДСТАВЛЕНИЕ
DML