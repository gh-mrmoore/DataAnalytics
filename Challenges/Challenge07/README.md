# Employee SQL

## Overview of Project

### Background
With increasing rates of retirements, the company must plan for the eventual replacement of employees who serve as a wealth of institutional knowledge. "Baby Boomers", generally defined as the cohort of the population born between 1946 and 1964, make up approximately 21% of the United States population (71.6 million of 328 million). Full Social Security benefits are payable between 66 and 67 years of age. This places many in the "Baby Boomer" cohort in the position of deciding when and if to retire with full (or possibly reduced) Social Security benefits. 

### Purpose
Determine the potential impact of "Baby Boomer" retirements across the company. Many currently active employees either already are or will soon be eligibile for full Social Security benefits. The loss of such a large percentage of the workforce could potentially be crippling. Establishing a mentorship program will be beneficial for many reasons:
* Migitigate the loss of institutional knowledge.
* Improve retention of new employees
* Ease the corporate transition to a new workforce.

## Analysis of Student and School Performance

### Figure 1: Count of Retiring Employees

### Figure 2: Count of Retiring Employees (Excluding Inactive Employees)

### Figure 3: Potential Mentors to Potential Vacancies Comparison

### Figure 4: Potential Mentors to Potential Vacancies Comparison (Excluding Inactive Employees)

### Table 1: Ratio of Vacancies to Potential Mentors
| Title | Ratio |
| ----- | ----- |
| Assistant Engineer | ~31:1 |
| Engineer | ~36:1 |
| Manager | 2:0 |
| Senior Engineer | ~98:1 |
| Senior Staff | ~67:1 |
| Staff | ~40:1 |
| Technique Leader | ~58:1 |
| All Titles | ~58:1 |

### Table 2: Ratio of Vacancies to Potential Mentors (Excluding Inactive Employees)
| Title | Ratio |
| ----- | ----- |
| Assistant Engineer | ~19:1 |
| Engineer | ~24:1 |
| Manager | 2:0 |
| Senior Engineer | ~86:0 |
| Senior Staff | ~59:1 |
| Staff | ~25:1 |
| Technique Leader | ~47:1 |
| All Titles | ~47:1 |

### Table 3: Ratio of Potential Vacancies to Existing Roles
| Title | Ratio |
| ----- | ----- |
| Assistant Engineer | 30-49% |
| Engineer | 30-46% |
| Manager | 22% |
| Senior Engineer | 30-34% |
| Senior Staff | 30-34% |
| Staff | 30-48% |
| Technique Leader | 30-37% |
| All Titles | ~47:1 |

### Deliverable Analysis Points
* Over 90,000 employees may retire soon.
* Between 30 and 37 percent of the current active employee workforace either is or soon will be eligible for full Social Security retirement benefits.
* There appear to be no employees in a "Manager" role eligible to serve in the mentorship program.
* The "Staff" and "Assistant Engineer" categories appear to be the potentially hardest-hit areas.

## Summary
* How many roles will need to be filled as the "silver tsunami" begins to make an impact?
    * Potentially 90,398 roles will need to be filled as employees begin to reach full Social Security retirement age.
    * It is more likely that there will be 72,458 roles to be filled as the 90,398 figure includes employees who are no longer with the company.
* Are there enough qualified, retirement-ready employees in the departments to mentor the next generation of Pewlett Hackard employees?
    * There are not. See Table 1 and Table 2. Overall mentorship ratios would be anywhere from approximately 47 to 1 all the way to 58 to 1. This would likely be untenable for the mentor unless mentorship became their only responsibility.

Please see `Further_Analysis.sql` for additional queries used in the analysis of this project.

There needs to be a more complete analysis of the data stored in the received csv files. The instructions given for this analysis did not appear to include the potential for employees having already left the company. There may also be other data inconsistencies in from the csv files themselves or from the data imports. A quick review in Deliverable 1 and showed that there was a distinct difference when filtering on `to_date` from the `titles` table.

## References
* Pew Research Center (www.pewresearch.org)
* United States Census (census.gov)