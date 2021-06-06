# PyBer

## Overview of Project

### Background

### Purpose


## Analysis

### Table 1 - Summary Statistics
| Area | Total Rides | Total Drivers | Total Fares | Avg. Fare per Ride | Avg. Fare per Driver |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Rural | 125 | 78 | $4,327.93 | $34.62 | $55.49 |
| Suburban | 625 | 490 | $19,356.33 | $30.97 | $39.50 |
| Urban | 1,625 | 2,405 | $39,854.38 | $24.53 | $16.57 |

### Table 2 - Weekly Fare Statistics
| Week of | Rural Fares | Suburban Fares | Urban Fares |
| ----- | ----- | ----- | ----- |
| 2019-01-06 | $187.92 | $721.60 | $1,661.68 |
| 2019-01-13 | $67.65 | $1,105.13 | $2,050.43 |
| 2019-01-20 | $306.00 | $1,218.20 | $1,939.02 |
| 2019-01-27 | $179.69 | $1,203.28 | $2,129.51 |
| 2019-02-03 | $333.08 | $1,042.79 | $2,086.94 |
| 2019-02-10 | $115.80 | $974.34 | $2,162.64 |
| 2019-02-17 | $95.82 | $1,045.50 | $2,235.07 |
| 2019-02-24 | $419.06 | $1,412.74 | $2,466.29 |
| 2019-03-03 | $175.14 | $858.46 | $2,218.20 |
| 2019-03-10 | $303.94 | $925.27 | $2,470.93 |

### Table 3 - Ride Count by Hour
| Time (24hr) | Rural Rides | Suburban Rides | Urban Rides |
| ----- | ----- | ----- | ----- |
| 0 | 7 | 24 | 71 |
| 1 | 7 | 21 | 77 |
| 2 | NA | 31 | **92** |
| 3 | 2 | 33 | 57 |
| 4 | 6 | 35 | 70 |
| 5 | 2 | 24 | 68 |
| 6 | 5 | 25 | 58 |
| 7 | 6 | 22 | 51 |
| 8 | 3 | 28 | 71 |
| 9 | 7 | 18 | 74 |
| 10 | 6 | 26 | 62 |
| 11 | 4 | 33 | 77 |
| 12 | 5 | 28 | 82 |
| 13 | 6 | 14 | 63 |
| 14 | 3 | 26 | 67 |
| 15 | 4 | 20 | 73 |
| 16 | 8 | 20 | 76 |
| 17 | 7 |33 | 60 |
| 18 | 5 | 22 | 57 |
| 19 | 9 | **50** | 59 |
| 20 | 3 | 36 | 80 |
| 21 | **14** | 19 | 60 |
| 22 | 3 | 15 | 52 |
| 23 | 3 | 22 | 68 |

### Figure 1 - Weekly Fare Data
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge05/Analysis/Fig1_Total_Fare_by_City_Type.png" alt="Total Fare by City Type" />

### Figure 2 - Ride Count by City Type and Time
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge05/Analysis/Fig2_Ride_Count_by_City_Type.png" alt="Ride Count by City Type and Time" />

## Summary

Without more information regarding population density, rates charged, and mileage per trip, a full analysis will be somewhat lacking or based largely on assumptions. For the purpose of this summary and for the recommendations request, the following assumptions will be made:
* Average mileage per trip will be sequentially higher moving from Urban to Suburban to Rural settings.
* Population density will higher moving from Rural to Suburban to Urban (most dense).
* There are no differences in fare rates between either geographic locations (Urban vs. Suburban vs. Rural) or in time of day or between dates.

### Metrics
As would be expected, average fare increases as overall population density would be expected to decrease (from Urban to Suburban to Rural). Average fare would be driven by the length of the trip, and trip distance would be expected to be lower in urban areas when compared to rural areas. Also as expected, total fares are higher in Urban areas and decrease moving to areas of lower population density, as there are not as many people to use the service.

### Recommendation - Differetiate Minimum Fares
By setting minimum fares specific to each type of area, total fares by type could be equalized. Assuming lower trip distances in urban settings and longer trip distances in rural settings, adjusting a minimum rate per trip could help equalize and/or improve rates for the three defined types of cities. This minimum could be in lieu of or in addition to a set mileage rate. Without additional information, however, this recommendation is difficult to fully quantify.

### Recommendation - Vary Pricing on Time and/or Day
By varying pricing during certain hours in certain areas, the profits could be maximized without sacrificing ride volume. As listed in Table 3, fares by hour show that Rural rides peak between 9:00 and 10:00 p.m. while suburban fares peak around 7:00 p.m. and urban fares peak around the 2:00 a.m. hour. A slight increase in fares at or around these times could both increase profits and increase the incentive for drivers to work during this time (by offering pay differentials or improved profit-sharing).

### Recommendation - Increase Recruiting in Suburban and Rural Areas
| Area | # of Drivers | Population Density | Drivers/Person/Square Mile |
| ----- | ----- | ----- | ----- |
| Urban | 2,405 | ~2,500 | 0.949 |
| Suburban | 490 | ~1,500 | 0.327 |
| Rural | 78 | ~500 | 0.156 |

By increasing the number of drivers available in rural areas, access should be improved and, therefore, the opportunity for growth would increase. Without enough drivers (and without access to customer service information), it is difficult, if not impossible, to tell where opportunities are being lost due to a lack of available drivers.

*Note: Population density estimated from https://www.census.gov/programs-surveys/geography/guidance/geo-areas/urban-rural/ua-facts.html. 2010 US Census.*