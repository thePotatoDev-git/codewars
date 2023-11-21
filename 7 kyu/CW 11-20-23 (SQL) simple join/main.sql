-- For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.

-- products table schema
-- id
-- name
-- isbn
-- company_id
-- price
-- companies table schema
-- id
-- name
-- You should return all product fields as well as the company name as "company_name".

-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

-- **Solution**

-- GET the id, name, isbn, company_id, price from products table (table1) and name from companies
SELECT
  table1.id,
  table1.name,
  table1.isbn,
  table1.company_id,
  table1.price,
  table2.name as company_name -- use alias company_name for table2.name
-- From the products table and name it the alias 'table1'
FROM products as table1
-- Get everything from the left table (products) and join it with the right table (companies)
LEFT JOIN companies as table2
-- If there is a match from table1.id and table2.id, return that record from companies
ON table1.company_id = table2.id;