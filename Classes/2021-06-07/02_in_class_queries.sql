-- 5. Filter the table to view only cities in Texas.
SELECT city from cities
WHERE state='Texas';

-- 6. Filter the table to view only cities with a population of less than 100,000.
SELECT city from cities
WHERE population<100000;

-- 7. Filter the table to view California cities with a population of less than 100,000.
SELECT city from cities
WHERE state='California' AND population<100000;

-- 8. Update the table to correct the state for the city of "Anaheim". 
UPDATE cities
SET state='CA'
WHERE city='Anaheim';  -- California was already in the state column and appeared to be spelled correctly

-- 9. Remove the duplicate entry of `('Boerne', 'Texas', 16056)` using the unique "id".
-- duplicate entry already deleted by original script
-- going to delete the remaining entry
DELETE FROM cities WHERE id=3;