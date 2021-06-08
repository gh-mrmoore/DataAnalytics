-- drop the old info table
DROP TABLE retirement_info;

-- add emp_no to info table, ALTER probably isn't safe enough to use in this scenario
SELECT emp_no, first_name, last_name
INTO retirement_info
FROM employees
WHERE (birth_date BETWEEN '1952-01-01' AND '1955-12-31')
AND (hire_date BETWEEN '1985-01-01' AND '1988-12-31');

SELECT * FROM retirement_info;


-- Join department manager to department using aliases
SELECT d.dept_name,
		dm.emp_no,
		dm.from_date,
		dm.to_date
FROM departments AS d
INNER JOIN dept_manager AS DM
ON d.dept_no = dm.dept_no;


-- Find current employees from retirement info table using join and aliases
SELECT ri.emp_no,
		ri.first_name,
		ri.last_name,
		de.to_date
INTO current_emp
FROM retirement_info AS ri
LEFT JOIN dept_no AS de
ON ri.emp_no = de.emp_no
WHERE de.to_date = ('9999-01-01');


-- Get count of retirees by department, aliased
SELECT COUNT(ce.emp_no), de.dept_no
FROM current_emp AS ce
LEFT JOIN dept_no AS de
ON ce.emp_no = de.emp_no
GROUP BY de.dept_no
ORDER BY de.dept_no ASC;


