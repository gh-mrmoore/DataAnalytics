/*
## Distinct Queries
In this activity, you will practice using `DISTINCT ON ()` with joins and filtering with the `WHERE` clause.

### Instructions
1. Retreive the latest rental for each customer's first and last name and emial address. 
2. Retrieve the latest rental date for each title. 
   * **Hint:** Join the `rental` and `inventory` tables on `inventory_id` and then join the `film` table with the `inventory` table on `film_id`. 

## Bonus
* The last query only returned 958 movies, which means 42 movies are not being rented. We know that there are 1,000 movies in the `film` table. Retrieve the film titles of the 42 movies that are not in the `inventory` table. 
* **Hint:** You won't need to use `DISTINCT ON ()` for this solution. Determine if the `film_id` from the `film` table is `NOT IN` the `inventory` table. 
*/

-- 1. Retreive the latest rental for each customer's first and last name and emial address. 
-- customer table: first_name, last_name, email, customer_id
-- rental table: customer_id, rental_date
SELECT DISTINCT ON (r.customer_id) c.first_name, c.last_name, c.email, r.rental_date
FROM rental AS r
JOIN customer AS c
ON (r.customer_id = c.customer_id)
ORDER BY r.customer_id, r.rental_date DESC;

-- 2. Retrieve the latest rental date for each title. 
-- rental table: rental_date, inventory_id
-- film table: film_id, title
-- inventory table: inventory_id, film_id
-- need title and rental date
SELECT DISTINCT ON (f.title) f.title, r.rental_date
FROM rental AS r
JOIN inventory AS i -- link rental table to inventory table
ON (r.inventory_id = i.inventory_id)
JOIN film AS f -- link inventory table to film table
ON (i.film_id = f.film_id)
ORDER BY f.title, r.rental_date;

-- Bonus:
-- Query 2 only returned 958 movies, which means 42 movies are not being rented. 
-- We know that there are 1,000 movies in the `film` table. 
-- Retrieve the film titles of the 42 movies that are not in the `inventory` table. 