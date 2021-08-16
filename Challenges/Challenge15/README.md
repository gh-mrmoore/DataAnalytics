# MechaCar Statistical Analysis

## Linear Regression to Predict MPG
Vehicle length and ground clearance appear to have a significant impact on fuel efficiency (as measured by mpg). A lesser, but still statistically significant impact is made by vehicle weight.

#### Image 1:
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img_1_linear_regression_mpg.png" alt="Image 1, Linear Regression" />

## Summary Statistics on Suspension Coils
Variance for suspension coils, overall, does not exceed the specified 100 pounds per square inch (see Image 2). However, Lot 3 shows a variance of approximately 170 PSI, far in excess of specifications (see Image 3).

#### Image 2: 
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img2_suspension_coil_total_summary.png" alt="Summary stats, suspension coils" />

#### Image 3:
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img3_suspension_coil_lot_summary.png" alt="Lot variance" />

## T-Tests on Suspension Coils
There appears to be no significant variance in the entire population. Lot 3 does appear to have a notable difference from the population average.
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img_suspension_coil_t_test_population.png" alt="Population t-test" />

#### Image 4:
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img4_suspension_coil_t_test_lot1.png" alt="Lot 1 subset t-test" />

#### Image 5:
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img5_suspension_coil_t_test_lot2.png" alt="Lot 2 subset t-test" />

#### Image 6:
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge15/img/img6_suspension_coil_t_test_lot3.png" alt="Lot 3 subset t-test" />

## Study Design: MechaCar vs Competition
### Metrics to Test
We will compare IIHS safety rating, fuel efficiency and various size elements among vehicles in the same category as MechaCar. 

### Null and Alternative Hypotheses
We will test the hypothesis that MechaCar is superior to other vehicles in the same category in the above-mentioned metrics. Our null hypothesis will be that there is no significant difference between MechaCar and its competitors. Our alternate hypothesis will be that the MechaCar manufacturing process inherently gives our company the advantage.

### Statistical Tests
Statistical testing will mostly rely on one-way ANOVA testing, however, some two-way ANOVA testing and two-way t-tests may help to shed additional light on our analysis.

### Data Needed
Required data will include:
* IIHS safety ratings
* Fuel efficiency ratings (NHTSA/CAFE and/or other sources)
* Shipping and manufacturing details for MechaCar and competitors (quality of materials, degree of automation in manufacturing, etc)