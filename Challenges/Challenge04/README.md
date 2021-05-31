# PyCitySchools

## Overview of Project

### Background
This project will examine the performance, by school, within the city's school district. Using pandas dataframes and some numpy functions, each school's performace will be examined using provided math and reading scores for grades nine through twelve. Taking a programmatic approach to the analysis should improve the speead of the analysis and the ability for parts of the analysis to be replicated more readily.

### Purpose
Upon review of the original data file, it appeared that there was evidence of academic dishonesty at Thomas High School. This was limited to the reading and math scores for the ninth grade. A revision to the data became necessary to accurately assess the performance of each school.

## Analysis of Student and School Performance

### Diagram 1: Original Calculation of School Performance
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge04/Analysis/original_calculated_school_ranking.png" alt="Diagram 1, Calculation of School Performace - Original" />

### Diagram 2: Re-Calculated School Performance
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge04/Analysis/re_calculated_school_ranking.png" alt="Diagram 2, Calculation of School Performance - Revised" />

### Metric: Per Student Budget
Throughout the district, those schools that spend less per student actually outperform those that spend more per student. While extenuating circumstances cannot be rules out given the dataset provided, it is a striking finding.

### Metric: Average Math Score
Excluding 9th grade students at Thomas High School reduced the original average math score by approximately 0.06 points. 

### Metric: Average Reading Score
Re-examination of the scores at Thomas High School show that the average reading score increased by approximately 0.05 points when excluding 9th grade scores.

### Metric: % Passing Math
Thomas High School saw a decrease in the relative percentage of student passing math when grades for 9th grade students were removed from the dataset. This small relative change corresponds with the relatively small change in the average math score.

### Metric: % Passing Reading
The percentage of students with passing reading scores also decreased at Thomas High School with the removal of all records from the ninth grade. Again, it was a relatively small decrease as reflected in the relatively small decrease in the average reading score.

### Metric: % Overall Passing
Finally, another small (0.3%) decrease when grades for ninth grade students are removed from the original dataset. This, again, is to be expected given the relatively small changes in the passing math and reading scores and percentages.

### Metric: School Rankings / Misc
Overall school rankings were not affected by changing the dataset to exclude 9th grade reading and math scores from Thomas High School. It also remains clear that charter schools, overall, outperform non-charter district schools in overall passing rates when looking at reading and math scores.

## Summary
Further statistical analysis would be required to better evaluate the performance of each school relative to other schools as well as the performance of each *type* of school related to one another. As stated previously, charter schools, overall, perform better than non-charter schools, but without further investigation, causation would be difficult to determine. For instance, higher per student costs may not be solely connected to line-item costs that most directly impact education outcomes (i.e. a bigger school with more students will necessarily have higher energry costs associated with lighting, heating/cooling, etc.).

Removal of the ninth grade student data did not cause a notable shift in the overall district performance. Further statistical analysis would be required to fully quantify the full impact, though. Given my interpretation of the instructions, spending per student was not affected as the students would still be counted in the overall population of the school (and, arguably, this *should* be the case as schools will teach more than just math and reading).