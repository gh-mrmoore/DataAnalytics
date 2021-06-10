/*
## Movies Ordered By
In this activity, you will use `ORDER BY` in combination with other SQL methods to query and order the tables.

### Instructions
* Determine the count of actor first names ordered in descending order.
* Determine the average rental duration for each rating rounded to two decimals. Order these in ascending order.
* Determine the top 10 average replace costs for length of the movie. 

### Bonus
* Using the city and country tables, determine the number of cities in each country from the database in descending order.
*/

-- Select count of actors first names in descending order
SELECT first_name, COUNT(first_name) AS "Name Count"
FROM actor
GROUP BY first_name
ORDER BY first_name;
-- ORDER BY "Name Count" DESC;

-- Select the average duration of movies by rating
SELECT AVG(length), rating
-- SELECT ROUND(AVG(length), 2) AS "Avg. Length"
FROM film 
GROUP BY rating 
ORDER BY rating;
-- 111.05xxx for G
-- 112.00xxx for PG
-- 120.44xxx for PG-13
-- 118.66xxx for R
-- 113.22xxx for NC-17

-- Select top ten replace costs for the length of the movie
SELECT replacement_cost
FROM film
ORDER BY replacement_cost DESC
FETCH FIRST 10 ROWS ONLY;
-- LIMIT 10

SELECT title, ROUND(AVG(replacement_cost), 2) AS "Avg. Replacement", length
FROM film
GROUP BY length 
ORDER BY "Avg. Replacement" DESC 
LIMIT 10;


-- Select the count of countries
SELECT COUNT(DISTINCT country) FROM country;