// Add console.log to check to see if our code is working.
console.log("working");

// Create a map object with a center and zoom level
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Set tile layer using Leaflet intro code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create map object with each attribute
let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 2,
    layers: [streets]
});

// Add a dark mode to the map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Get airport GeoJSON from URL
let airportData = "https://raw.githubusercontent.com/gh-mrmoore/DataAnalytics/MultipleGeoJSON/Modules/Module13/static/js/majorAirports.json";

// Get data using d3
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // create GeoJSON layer
//     L.geoJSON(data).addTo(map);
// });

// Re-factor to include popup
d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("City: " + feature.properties.city)
        }
    }).addTo(map);
})

// Add 'graymap' tile layer to the map.
// streets.addTo(map);

// Pass map layer to layer control and add layer control
L.control.layers(baseMaps).addTo(map);