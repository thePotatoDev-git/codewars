-- Given a demographics table in the following format:

-- ** demographics table schema **

-- id
-- name
-- birthday
-- race
-- you need to return a table that shows a count of each race represented, ordered by the count in descending order as:

-- ** output table schema **

-- race
-- count

-- Get 'race' column
SELECT race,
-- Count by each row how many rows have a unique race (i.e. how many rows have 'caucasian'). Then put the total amount in the 'count' column. (race: 'caucasian' count: 4)
COUNT(*) as count
-- from the demographics db
FROM demographics
-- Group by unique race
GROUP BY race
-- Order by count in descending order
ORDER BY count(race) desc;