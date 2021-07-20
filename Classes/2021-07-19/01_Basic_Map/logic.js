// Create our initial map object
let map = L.map('map').setView([40.2, -95.9], 4);
// Set the longitude, latitude, and the starting zoom level
let olatheMarker = L.marker([38.8814, -94.8191]).addTo(map);

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// Set tile layer using Leaflet intro code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);