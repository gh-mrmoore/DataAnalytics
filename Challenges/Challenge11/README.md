# UFOs and ES6+

## Overview
The dataset provided lists reports of unidentified flying objects across the United States with limited reports from Canada as well. By filtering through the JavaScript array of objects, it may be possible to find trends or patterns in sightings. Showing these results, and the breadth of their locales, it may convince some to believe.

## Results
By modifying the filter critera "Date," "City," "State," "Country," or "Shape," the user can check results for various combinations of criteria for review and analysis.

### Image 1: Filter By Date and Shape
<img src="https://github.com/gh-mrmoore/Analytics_Challenge11/blob/main/static/images/img1_filter_by_date_shape.png" alt="Filter by Date and Shape" />

### Image 2: Filter By Date
<img src="https://github.com/gh-mrmoore/Analytics_Challenge11/blob/main/static/images/img2_filter_by_date.png" alt="Filter by Date" />

### Image 3: Filter By City
<img src="https://github.com/gh-mrmoore/Analytics_Challenge11/blob/main/static/images/img3_filter_by_city.png" alt="Filter by City" />

### Image 4: Filter By Date, City, and Shape
<img src="https://github.com/gh-mrmoore/Analytics_Challenge11/blob/main/static/images/img4_filter_by_date_city_shape.png" alt="Filter by Date, City, and Shape" />

## Summary

### Drawback
By reacting to the change on any given field, the user will have to wait on the filter action to occur. On larger datasets, this could incur some lag. Additionally, the user could be frustrated by an unexpected behavior (most sites allow you to select and then apply filters). Finally, the layout of the article text above the data and filters, to me, is a little lopsided (there is a short headline to the left and a much longer article on the right). It might be better to stack the headlines with the articles or to separate the data search and news sections entirely.

### Recommendations
#### First Recommendation
It could be useful to create drop-down menus of available filter options rather than relying on user input. As we're currently not filtering for the validity of the input, there's the possibility of users being frustrated by a lack of results.

#### Second Recommendation
Being able to sort by column while retaining the filters input by the user would be a nice feature.

#### Third Recommendation
Counting results and displaying summary statistics for the user would also be very useful. Seeing those results on the page would prevent the user from having to manually count the number of results in the search.