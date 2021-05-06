# Kickstarting with Excel

## Overview of Project

### Background
Our client wishes to compare the results of their recent Kickstarter campaign with those of campaigns created on the same platform between 2009 and 2017.

### Purpose
Create visualizations of Kickstarter results between 2009 and 2017 to compare campaign results based on the launch date and the outcome given the campaign goal. Analysis of this dataset could yield improved campaign performance in the future.

## Analysis and Challenges

### Analysis of Outcomes Based on Launch Date
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge01/Resources/Theater_Outcomes_vs_Launch.png" alt="Chart: Campaign Outcomes Based on Launch Date" />
The highest number of campaigns and the highest success rate of campaigns occured during the months of May, June and July over the period of the data provided (2009 - 2017).

### Analysis of Outcomes Based on Goals
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge01/Resources/Outcomes_vs_Goals.png" alt="Chart: Campaign Outcomes vs Campaign Goals" />
Barring some outlying data points, the highest percentage of successful campaigns are those with relatively lower campaign goals. Almost 85 percent of campaigns in the dataset were for goals of $9,999 or less, with an average success rate of almost 70 percent. For campaigns with goals of $10,000 and above, the success rate falls to 45 percent.

### Challenges and Difficulties Encountered
The only significant difficulty encountered was familiarizing myself with the COUNTIFS function. Having never used it before, I built it out slowly and had to re-write the conditions a time or two to fit the parameters of the analysis.

#### Potential Difficulties
Some potential difficulties could include:
- Creating the pivot table with the correct monthly breakdowns for successful, failed and canceled campaigns.
- Correctly summarizing pivot table data with column and/or row summations that are meaningful.
- Improperly filtering the original dataset rather than filtering during analysis. Improperly filtering the dataset could lead to the accidental exclusion of relevant data points.

## Results

### Outcomes Based on Launch Date: First Conclusion
To increase the likelihood of a successful campaign, it could be beneficial to launch the campaign during May, June or July of a given year.

### Outcomes Based on Launch Date: Second Conclusion

### Outcomes Based on Goals: First Conclusion
The highest likelihood of success lies with campaigns whose fundraising goal is less than $10,000. To improve the likelihood of success, setting a goal around this amount is advisable.

### What are some limitations of this dataset?
Some limitations of this analysis include:
- The specific focus on Kickstarter. There are other platforms for crowdfunding (indiegogo, gofundme, patreon, etc). Including information from those sources could better inform the overall analysis. Additionally, including data from additional sources could yield better fundraising results following a comparative analysis.
- The categories were determined by data, presumably, entered by the campaign creator and could have had some information incorrectly classified for the purposes of our analysis.
- There are two pieces of data (staff_pick and spotlight) for each record that are not considered in the scope of the project and are not well-defined within the dataset. If these two fields influence things like visibility on the Kickstarter home page or relative placing in search results, they should be included in any future analysis.

### What are some other possible tables and/or graphs that we could create?
- Further investigate outcomes based on goals using smaller goal increments and incorporating analysis over time.
- Analyze with relative success rated on scales other than totally successful (100% funded). Perhaps a 90 percent funding level could be considered 'mostly sucessful' with 100 percent funding considered 'completely successful,' etc.
- Comparative analysis of outcomes to include country of origin. Perhaps different types of campaigns are more successful in different locations.