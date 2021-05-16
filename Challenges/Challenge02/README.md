# VBA of Wall Street

## Overview of Project

### Background
Our client requested assistance compiling and comparing the performance of various stocks in 2017 and 2018. Comparing total volume traded and the difference in closing price for each year will be considered as relative measures of the performance of a given set of stocks. No other factors or variables will be taken in to account during the course of this analysis.

### Purpose
By reviewing stock performance as outlined in the background statement, a recommendation will be made regarding the relative 'best-performing' stock during the period of the analysis. This recommendation will inform the investment decisions made by the customer(s) of our client. We will also examine different ways of analyzing the data using loops within our code and determining whether it is more efficient to loop over the entirety of the dataset multiple times or loop through the entire dataset once while looping through a smaller data array multiple times.

## Results

### Stock Comparison: 2017 vs. 2018
| Ticker | Total Daily Volume (2018) | Return(2018) | Total Daily Volume (2017) | Return (2017) |
| ----- | ----- | ----- | ----- | ----- |
| AY | 83,079,900 | -7.3% | 136,070,900 | 8.9% |
| CSIQ | 200,879,900 | -16.3% | 310,592,800 | 33.1% |
| DQ | 107,873,900 | -62.6% | 35,796,200 | 199.4% |
| ENPH | 607,473,500 | 81.9% | 221,772,100 | 129.5% |
| FSLR | 478,113,900 | -39.7% | 684,181,400 | 101.3% |
| HASI | 104,340,600 | -20.7% | 80,949,300 | 25.8% |
| JKS | 158,309,000 | -60.5% | 191,632,200 | 53.9% |
| RUN | 502,757,100 | 84.0% | 267,681,300 | 5.5% |
| SEDG | 237,212,300 | -7.8% | 206,885,200 | 184.5% |
| SPWR | 538,024,300 | -44.6% | 782,187,000 | 23.1% |
| TERP | 151,434,700 | -5.0% | 139,402,800 | -7.2% |
| VSLR | 136,539,100 | -3.5% | 109,487,900 | 50.0% |

#### 2017
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge02/Resources/VBA_Challenge_2017.png" alt="" />

#### 2018
<img src="https://github.com/gh-mrmoore/DataAnalytics/blob/main/Challenges/Challenge02/Resources/VBA_Challenge_2018.png" alt="" />


### Recommendation(s)
Enphase Energy (ENPH) and Sunrun, Inc. (SUN) are the only two stocks considered which had a positive return (an overall increase in the value of the stock at the end of each year). Enphase Energy had, by far, the greater return over each 1-year period when compared to any other stock issue examined. Barring a more active approach where stock prices were monitored on a day-to-day basis for fluctuations and stock sales could be managed when prices increased in the short-term, Enphase Energy (ENPH) would likely be the best long-term investment option.

## Summary

### Re-factored Script Execution Time
| Year | Trial 1 | Trial 2 | Trial 3 | Trial 4 | Trial 5 | Average |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 2018 | 0.3594 | 0.2813 | 0.3828 | 0.2891 | 0.2891 | 0.3203 |
| 2017 | 0.4297 | 0.3672 | 0.3594 | 0.2969 | 0.3359 | 0.3578 |

### Re-factored Script Execution Time
| Year | Trial 1 | Trial 2 | Trial 3 | Trial 4 | Trial 5 | Average |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 2018 | 1.3438 | 1.6641 | 1.5938 | 1.6016 | 1.4844 | 1.5375 |
| 2017 | 1.4609 | 1.3281 | 1.7187 | 1.5469 | 1.4922 | 1.5094 |

### Refactoring: Relative advantages/disadvantages
Re-factoring code has several advantages, including, but not necessarily limited to:
* Improving performance.
* Eliminating bugs or vulnerabilities.
* Simplifying classes, methods, or sub-routines.
* Making code easier to read and interpret.

Re-factoring code may also have some disadvantages, including, but not necessarily limited to:
* Software regression.
* Potentially time-consuming.
* May not necessarily introduce new features to the application.

### Script comparison
Although neither a random or scientific sampling of script performance times, it is relatively easy to see that the re-factored code performed markedly better than the original code base. The original code base looped through the entire dataset eleven times while the revised dataset looped through the full stock dataset only once. The revised code base instead looped through an eleven-item array, checking each smaller loop to see when or if the volume or price needed to be adjusted.

In this instance, re-factoring the code yielded marked improvements in performance. Incorporating more advanced data structures allowed for more succinct loops within the program while still accomplishing the overall goal. Even though the program increased by approximately 50 lines (albeit including comments and whitespace), the run-time/executtion-time performance increase seems to more than compensate for any time spent compiling the program.

Without additional comments within the code, it may not be readily apparent how or why the code is being refactored. The following snippet from the re-factored codebase shows how using arrays significantly reduces the program's execution time.
    Dim tickerIndex As Integer
    tickerIndex = 0
    
    Dim tickerVolumes(12) As Long
    Dim tickerStartingPrices(12) As Single
    Dim tickerEndingPrices(12) As Single

    For i = 2 To rowCount
        ....
        If Cells(i + 1, 1).Value <> tickers(tickerIndex) Then
            '3d Increase the tickerIndex.
            tickerIndex = tickerIndex + 1
            
        End If
    
    Next i

In the initial code, a nested loop ran 11 times (once for each stock) and then looped over the entirety of the stocks datasets (3,012 rows for both 2017 and 2018).
    For i = 0 To 11
        ....        
        For j = rowStart To rowCount
            ....
        Next j
        ' Output results to the summary sheet
    Next i

It may also complicate the de-bugging process by having an increased sensitivity to indentation, greater inter-dependency on disparate elements of the program, and creating more lines of code to debug. Again, though, the increase in execution-time performance seems to far outweigh any potential drawbacks.