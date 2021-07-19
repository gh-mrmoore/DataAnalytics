// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var userFilters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let elementChanged = d3.select(this);
    console.log(elementChanged._groups[0][0]);

    // 4b. Save the value that was changed as a variable.
    let valueChanged = elementChanged._groups[0][0].value;
    console.log(valueChanged);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = elementChanged._groups[0][0].id
    console.log(elementChanged._groups[0][0].id);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    // if the id of the filter is already in the filter object
    if (filterId in userFilters) {
      // delete the existing object
      delete userFilters[filterId];
      // if the filter value is valid, add the new value
      if (Boolean(valueChanged)) {
        userFilters[filterId] = valueChanged;
      }
    // if the key value isn't in the object
    } else {
      userFilters[filterId] = valueChanged;
    }

    console.log(userFilters);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (var [key, value] of Object.entries(userFilters)) {
      if (key == 'datetime') {
        filteredData = filteredData.filter(row => row.datetime === value);        
      } else if (key == 'city') {
        filteredData = filteredData.filter(row => row.city === value.toLowerCase());
      } else if (key == 'state') {
        filteredData = filteredData.filter(row => row.state === value.toLowerCase());
      } else if (key == 'country'){
        filteredData = filteredData.filter(row => row.country === value.toLowerCase());
      } else if (key == 'shape') {
        filteredData = filteredData.filter(row => row.shape === value.toLowerCase());
      }
    }
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.select("#datetime").on("change", updateFilters);
  d3.select("#city").on("change", updateFilters);
  d3.select("#state").on("change", updateFilters);
  d3.select("#country").on("change", updateFilters);
  d3.select("#shape").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
