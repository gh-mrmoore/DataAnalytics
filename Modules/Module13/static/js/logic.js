// Add console.log to check to see if our code is working.
console.log("working");

// Create a map object with a center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Set tile layer using Leaflet intro code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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

// let line = [
//     [33.9416, -118.4085],  // 1st point
//     [37.6213, -122.3790],  // 2nd point
//     [40.7899, -111.9791],  // 3rd point
//     [47.4502, -122.3088]   // 4th point
// ];

// skill drill
let line = [
    [39.3036, -94.7093],  // 1st point - MCI
    [40.6413, -73.7781],  // 2nd point - JKF
    [36.0840, -115.1537],  // 3rd point - McCarran
    [39.3036, -94.7093]   // 4th point - 
];


L.polyline(line, {
    color: "blue",
    dashArray: "20",
    dashOffset: "20"
}).addTo(map);

// Add 'graymap' tile layer to the map.
streets.addTo(map);