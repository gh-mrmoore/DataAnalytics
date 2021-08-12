/*
## Gregarious Aggregates
In this activity, you will practice writing queries with aggregate functions with grouping and adding aliases.

### Instructions
Use aggregate functions as you run queries to answer the following questions. You will have to search the internet for some of them. Try to use aliases for more informative column headings.

1. What is the average cost to rent a film in the Sakila stores?
2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? What is the most expensive?
3. How much would it cost to replace all films in the database?
4. How much would it cost to replace all films in each ratings category?
5. How long is the longest movie in the database? How long is the shortest movie?

**Hint**: Consult the Postgres documentation on [aggregate functions](https://www.postgresql.org/docs/9.5/functions-aggregate.html) for a summary of the available functions.
*/

-- 1. What is the average cost to rent a film in the Sakila stores?
SELECT AVG(amount) FROM payment; -- 4.200xxxxxx
SELECT AVG(rental_rate) AS "Average Rental Rate" FROM film;

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT AVG(amount), f.rating -- rental cost in payment table
FROM payment
INNER JOIN rental as r -- rental_id in payment table
ON payment.rental_id = r.rental_id -- rental_id in rental table
INNER JOIN inventory as i -- inventory_id in rental table
ON r.inventory_id = i.inventory_id -- inventory_id in inventory table
INNER JOIN film as f -- film_id in inventory table
ON i.film_id = f.film_id -- film_id in film table
GROUP BY f.rating -- rating in film table

-- 4.25xxx for PG-13
-- 4.17xxx for R
-- 4.20xxx for G
-- 4.21xxx for NC-17
-- 4.15xxx for PG

-- 3. How much would it cost to replace all the films in the database?
-- replacement_cost in film table
SELECT SUM(replacement_cost) FROM film; -- 19984.00

-- 4. How much would it cost to replace all the films in each ratings category?
SELECT SUM(replacement_cost), rating FROM film
GROUP BY rating;
-- 4549.77 for PG-13
-- 3945.05 for R
-- 3582.22 for G
-- 4228.90 for NC-17
-- 3678.06 for PG

-- 5. How long is the longest movie in the database? The shortest?
SELECT MIN(length) AS "Longest", MAX(length) AS "Shortest" from film;
-- 46 for MIN, 185 for MAX