// Add console.log to check to see if our code is working.
console.log("working");

// Create a map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Set tile layer using Leaflet intro code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add a marker to the map for Los Angeles
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle to the map around downtown LA
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 10000 // re-sized to be more visible
//  }).addTo(map);

// Use CircleMarker function
// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 150,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// Get city data
let cityData = cities;

// Loop thru cities array
// Add marker for each city with population
// cityData.forEach(function(city) {
//     console.log(city);
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr /> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Loop thru cities array
// Add circle with radius proportionate to the population
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(city.location, {
        radius: (city.population * 0.00001)
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr /> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});
  
// Add 'graymap' tile layer to the map.
streets.addTo(map);