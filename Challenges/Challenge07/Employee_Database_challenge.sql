-- Deliverable 1

-- Step 1 thru Step 5
SELECT e.emp_no, e.first_name, e.last_name, t.title, t.from_date, t.to_date
INTO challenge_retirement_titles  -- deviating from the directions to help with sorting and identifying tables
FROM employees as e
INNER JOIN titles as t
ON (e.emp_no = t.emp_no)
WHERE (e.birth_date BETWEEN '1952-01-01' AND '1955-12-31')
ORDER BY e.emp_no ASC;

-- Step 8 thru Step 12
-- Use Dictinct with Orderby to remove duplicate rows
SELECT DISTINCT ON (emp_no) emp_no,
first_name,
last_name,
title

INTO challenge_unique_titles
FROM challenge_retirement_titles as crt
ORDER BY emp_no ASC, to_date DESC;

-- Step 15 thru Step 18
SELECT COUNT(title), title
FROM challenge_unique_titles
GROUP BY title
ORDER BY COUNT(title) DESC;

-- Deliverable 2
SELECT DISTINCT ON (e.emp_no) e.emp_no, e.first_name, e.last_name, e.birth_date, d.from_date, d.to_date, t.title
INTO challenge_mentorship_eligibility
FROM employees AS e
INNER JOIN dept_no AS d
ON (e.emp_no = d.emp_no)
INNER JOIN titles AS t
ON (e.emp_no = t.emp_no)
WHERE (e.birth_date BETWEEN '1965-01-01' AND '1965-12-31')
AND (d.to_date = '9999-01-01')
ORDER BY e.emp_no ASC;