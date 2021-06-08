-- EID, name, gender, salary
SELECT e.emp_no, e.first_name, e.last_name, e.gender, s.salary, de.to_date
INTO salary_info
FROM employees AS e
INNER JOIN salaries AS s 
ON e.emp_no = s.emp_no
INNER JOIN dept_no as de
ON (e.emp_no = de.emp_no)
WHERE (e.birth_date BETWEEN '1952-01-01' AND '1955-12-31')
AND (e.hire_date BETWEEN '1985-01-01' AND '1988-12-31')
AND (de.to_date = '9999-01-01');

SELECT * FROM salary_info;

-- Manager information (copied from module)
SELECT  dm.dept_no,
        d.dept_name,
        dm.emp_no,
        ce.last_name,
        ce.first_name,
        dm.from_date,
        dm.to_date
INTO manager_info
FROM dept_manager AS dm
    INNER JOIN departments AS d
        ON (dm.dept_no = d.dept_no)
    INNER JOIN current_emp AS ce
        ON (dm.emp_no = ce.emp_no);


-- Retirees by department
SELECT ce.emp_no, ce.first_name, ce.last_name, d.dept_name
INTO dept_info
FROM current_emp AS ce
INNER JOIN dept_no AS de
ON (ce.emp_no = de.emp_no)
INNER JOIN departments as d 
ON (de.dept_no = d.dept_no);