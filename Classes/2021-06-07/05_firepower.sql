-- Code provided:
-- Drop table if exists
DROP TABLE firepower;

-- Create new table to import data
CREATE TABLE firepower (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

-- Import data from firepower.csv
-- View the table to ensure all data has been imported correctly
SELECT * FROM firepower;

-- My code:

-- Alter the table to add an `id` as the `PRIMARY KEY`. 
ALTER TABLE firepower
ADD id SERIAL PRIMARY KEY;

-- Find the rows that have a `ReservePersonnel` of 0 and delete 
-- these rows from the dataset.
SELECT * FROM firepower
WHERE reservepersonnel = 0;
-- 21 rows out of 133

DELETE FROM firepower WHERE reservepersonnel = 0;

SELECT * FROM firepower;
-- 112 rows returned...

-- Every country in the world at least deserves one `FighterAircraft`—it only seems fair.
-- Let's add one to each nation that has none.
SELECT * FROM firepower WHERE fighteraircraft = 0;
-- 30 results

UPDATE firepower
SET fighteraircraft = 1, totalaircraftstrength = totalaircraftstrength + 1
WHERE fighteraircraft = 0;

SELECT * FROM firepower WHERE fighteraircraft = 1;
-- 31 results

--Find the averages for `TotalMilitaryPersonnel`, `TotalAircraftStrength`, 
-- `TotalHelicopterStrength`, and `TotalPopulation`, and rename the 
--columns with their designated average.
SELECT AVG(totalmilitarypersonnel) AS avg_totalmilitarypersonnel, -- 524357.61
AVG(totalaircraftstrength) AS avg_totalaircraftstrength, -- 456.55
AVG(totalhelicopterstrength) AS avg_totalhelicopterstrength --182.65
FROM firepower;

-- Insert value
INSERT INTO firepower (
    country,
    iso3,
    totalpopulation,
    totalmilitarypersonnel,
    totalaircraftstrength,
    totalhelicopterstrength
)
VALUES (
    'Latveria',
    'LTV',
    60069024,
    524358,
    457,
    183
);

SELECT * FROM firepower
WHERE iso3='LTV';