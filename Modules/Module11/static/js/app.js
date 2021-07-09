// import the data.js file
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear the existing data
    tbody.html("");

    // append new rows
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // append table cells
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // get date-time from html and store it
    let date = d3.select("#datetime").property("value");

    // set variable to filter data
    let filteredData = tableData;

    // filter is there's a user-specified date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        
        // build the table with the filtered data
        buildTable(filteredData);
     }
}

d3.selectAll("#filter-btn").on("click", handleClick);

// create the initial table
buildTable(tableData);