// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// var x = d3.json(url).then();

// console.log(x);

// Retrieve data from local file.
d3.json("samples.json").then(function(data){
    console.log(data);
    // get wfreq and sort descending
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
    console.log(wfreq);
    filterWfreq = wfreq.filter(record => record != null);
    console.log(filterWfreq);

    // output data on first person in record
    firstRecord = data.metadata[0];
    Object.entries(firstRecord).forEach(([key, value]) =>
        {console.log(key + " | " + value);});
});