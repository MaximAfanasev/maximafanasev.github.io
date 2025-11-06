SELECT top (1000) [Ид]
  ,[Номер]
  ,[Партнер]
FROM [R2].[dbo].[Заказ]

SELECT
  *
FROM
  albums;

SELECT
	FirstName AS 'First Name',
	LastName AS [Last Name],
	Email AS EMAIL
	Phone CELL
	FROM
	customers
ORDER BY
  LastName ASC

ORDER BY
  FirstName ASC,
  LastName DESC

SELECT
  Total AS [Original Amount],
  Total + 10 AS [Addition Operator],
  Total - 10 AS [Subtraction Operator],
  Total / 10 AS [Division Operator],
  Total * 10 AS [Multiplication Operator],
  Total % 10 AS [Modulo Operator]
FROM
  invoices
ORDER BY
  Total DESC

Total BETWEEN 1.98 AND 5.00

Total IN (1.98, 3.96)

WHERE
	BillingCity IN ('Tucson', 'Paris', 'London')
'T%' начинающиеся с буквы T
'%T' заканчивающиеся буквой T
'%T%' содержащие
'T%T' начинающиеся и заканчивающиеся буквой T

WHERE
  InvoiceDate = '2009-01-03 00:00:00'

WHERE
  DATE(InvoiceDate) = '2009-01-03'

DATE(InvoiceDate) > '2010-01-02' AND Total < 3

Total > 1.98 AND BillingCity LIKE 'p%' OR
BillingCity LIKE 'd%'

Total > 1.98 AND (BillingCity LIKE 'p%' OR
BillingCity LIKE 'd%')

CASE
  WHEN TOTAL &#60; 2.00 THEN 'Baseline Purchase'
  WHEN TOTAL BETWEEN 2.00 AND 6.99 THEN 'Low Purchase'
WHEN TOTAL BETWEEN 7.00 AND 15.00 THEN 'Target Purchase'
ELSE 'Top Performers'
END AS PurchaseType

SELECT
*
FROM
  invoices
INNER JOIN
  customers
ON
  invoices.CustomerId = customers.CustomerId

SELECT
*
FROM
  invoices AS i
INNER JOIN
  customers AS c
ON
  i.CustomerId = c.CustomerId

SELECT
  i.InvoiceId,
  c.CustomerId,
  c.Name,
  c.Address,
  i.InvoiceDate,
  i.BillingAddress,
  i.Total
FROM
  invoices AS i
INNER JOIN
  customers AS c
ON
  i.CustomerId = c.CustomerId

SELECT
  i.InvoiceId,
  c.CustomerId,
  c.Name,
  c.Address,
  i.InvoiceDate,
  i.BillingAddress,
  i.Total
FROM
  invoices AS i
RIGHT OUTER JOIN
  customers AS c
ON
  i.CustomerId = c.CustomerId

SELECT
FROM
  customers
WHERE
COUNT(LastName) AS [NameCount]
LastName LIKE 'B%'

SELECT
  FirstName,
  LastName,
  FirstName || ' ' || LastName

SELECT
  PostalCode,
  LENGTH(PostalCode) AS [Postal Code Length]

SELECT
FROM
  customers
WHERE
  PostalCode,
SUBSTR(PostalCode,1,5) AS [Five Digit Postal Code]
  Country = "USA"

SELECT
  BillingCity,
AVG(Total)
FROM
  invoices
WHERE
  BillingCity LIKE 'B%'
GROUP BY
  BillingCity
HAVING
  AVG(Total) > 5
ORDER BY
  BillingCity

ROUND(AVG(Total), 2) AS [Average Total]

SELECT
  InvoiceDate,
  BillingAddress,
  BillingCity,
  Total
FROM
  invoices
WHERE Total <
  (SELECT
  AVG(Total)
  from
  invoices)
ORDER BY
  Total DESC
