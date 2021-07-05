# Hawaii Ice

## Overview of Project

### Background
Multiple weather stations throughout Hawaii take regular temperature and precipitation measurements. These measurements are stored in a SQLite database and may be accessed using SQLalchemy. By converting the database information to pandas DataFrames, the data in the local SQLite database can be easily examined and interpreted.

### Purpose
Evaluate temperature readings in Hawaii during the months of June and December. By determining the temperature during these months, the viability of an ice cream shop operating year-round may be determined.

## Analysis

### Figure 1: June Temperature Summary Statistics
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge09/Resources/Fig1_june_df_describe.png" alt="Screen capture of June summary statistics dataframe." />

### Figure 2: December Temperature Summary Statistics
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge09/Resources/Fig2_december_df_describe.png" alt="Screen capture of December summary statistics dataframe." />

### Table 1: Yearly Average Temperature by Month
| Month | Avg. Temperature |
| ----- | ----- |
| January | 68.73 |
| February | 69.44 |
| March | 70.06 |
| April | 72.36 |
| May | 73.68 |
| June | 74.94 |
| July | 76.08 |
| August | 76.41 |
| September | 76.16 |
| October | 75.39 |
| November | 73.25 |
| December | 71.04 |

### Table 2: Temperature Comparison - June vs. December
| Statistic | June | December
| ----- | ----- | ----- |
| Count | 1700.00 | 1517.00 |
| Mean | 74.94 | 71.04 |
| STD | 3.26 | 3.75 |
| Min | 64.00 | 56.00 |
| 25% | 73.00 | 69.00 |
| 50% | 75.00 | 71.00 |
| 75% | 77.00 | 74.00 |
| Max | 85.00 | 83.00 |

## Summary

### Analysis
* Overall, June has seen a higher average temperature than December. There is not a major difference between the two months, however, only about 3-4 degrees.
* There is a more noticeable difference in the absolute minimum temperatures when compared to the absolute maximum observed temperatures.
* Temperature variance is slightly higher during December than in June. This could indicate that there are more noticeable temperature swings during December.

### Further Exploration
* Query by month and by station to better determine an exact location for the new shop(s) in Hawaii.
* Query by month and by the level of precipitation to determine if the stores need to have indoor or covered seating. Nobody likes their ice cream washing away in the rain.
* Explore different data sources to see if water temperature could be factored in to our analysis.