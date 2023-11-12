-- Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

-- For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

-- Constraint:

-- 1 <= month <= 12

-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.

SELECT
  month, -- Get month from table
  CASE -- Switch case
    WHEN month <= 3
      THEN 1
    WHEN month <= 6
      THEN 2
    WHEN month <= 9
      THEN 3
    WHEN month <= 12
      THEN 4
  END AS res -- Ends case statement and creates 'res' column
FROM quarterof; -- From quarterof db