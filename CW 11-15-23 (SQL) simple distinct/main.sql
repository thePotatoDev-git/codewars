-- For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.

-- people table schema
-- id
-- name
-- age
-- select table schema
-- age (distinct)
-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

-- **Solution**

-- Get DISTINCT values from 'age' column
SELECT DISTINCT age
-- From people database
FROM people;