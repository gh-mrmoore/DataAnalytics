-- Drop table if exists
DROP TABLE wordassociation;

-- Create table and view column datatypes
CREATE TABLE wordassociation (
	author INT,
	word1 VARCHAR,
	word2 VARCHAR,
	source VARCHAR
);

SELECT *
FROM wordassociation;

-- Collect all rows with the word "stone" in the "word1" column
SELECT * FROM word_association
WHERE word1='stone';

-- Collect all rows where the author is within the 0-10 range
SELECT * FROM word_association
WHERE author BETWEEN 0 and 10
ORDER BY author ASC;

-- Search for the word "pie" in both "word1" and "word2" columns
SELECT * FROM word_association
WHERE word1 LIKE '%pie%' AND word2 LIKE '%pie%';
-- zero results... verified with conditional below...
-- WHERE word1 LIKE '%pie%' OR word2 LIKE '%pie%';

-- BONUS
-- Select all rows with a source of "BC"
SELECT * FROM word_association
WHERE source = 'BC';

-- Collect all rows where the author is within the 333-335 range and has a source of "BC"
SELECT * FROM word_association
WHERE (author BETWEEN 333 AND 335) AND (source = 'BC');
