-- Retirement-eligible employees from Sales (d007) and Development (d005)
SELECT e.emp_no, e.first_name, e.last_name, de.dept_no, d.dept_name
-- INTO sales_dev_retirees
FROM employees AS e
INNER JOIN dept_no AS de
ON e.emp_no = de.emp_no
INNER JOIN departments as d
ON de.dept_no = d.dept_no
WHERE (e.birth_date BETWEEN '1952-01-01' AND '1955-12-31')
AND (e.hire_date BETWEEN '1985-01-01' AND '1988-12-31')
AND (de.to_date = '9999-01-01')
AND (de.dept_no IN('d005', 'd007'));