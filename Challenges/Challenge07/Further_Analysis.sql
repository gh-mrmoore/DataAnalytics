-- Get the total number of current employees
SELECT COUNT(emp_no) FROM current_emp; -- 33118

-- Find the total number of potential mentors
SELECT COUNT(emp_no) AS "Potential Mentors"
FROM challenge_mentorship_eligibility; -- 1,549

-- Get the total number of retiring employees
SELECT COUNT(count)
FROM challenge_retiring_titles; -- 90,398

-- Get the counts for mentors by title
SELECT COUNT(emp_no),
	title
INTO challenge_mentor_counts
FROM challenge_mentorship_eligibility
GROUP BY title
ORDER BY title ASC;

-- Compare the number of retiring titles to the number of mentors for each title
SELECT cmc.count AS "Mentors",
	cmc.title AS "Mentor Titles",
	crt.count AS "Potential Vacancies",
	crt.title AS "Vacancy Titles"
FROM challenge_mentor_counts AS cmc
FULL OUTER JOIN challenge_retiring_titles AS crt
ON cmc.title = crt.title
ORDER BY crt.title ASC;

-- Get the total number of active employees
SELECT COUNT(e.emp_no) 
FROM employees AS e
LEFT JOIN titles AS t
ON e.emp_no = t.emp_no
WHERE t.to_date = '9999-01-01';
-- ORDER BY e.emp_no
-- 240124

-- Get all active employee titles
SELECT COUNT(e.emp_no),
	title
FROM employees AS e
LEFT JOIN titles AS t
ON e.emp_no = t.emp_no
WHERE t.to_date = '9999-01-01'
GROUP BY t.title
ORDER BY title ASC;
-- "3588"	"Assistant Engineer"
-- "30983"	"Engineer"
-- "9"		"Manager"
-- "85939"	"Senior Engineer"
-- "82024"	"Senior Staff"
-- "25526"	"Staff"
-- "12055"	"Technique Leader"