// Set tile layer using Leaflet intro code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Use this link to get the geojson data.
// var bostonNeighborhoods = "https://data.boston.gov/dataset/boston-neighborhoods1";
var bostonNeighborhoods = "static/data/Boston_Neighborhoods.geojson";
// var chargingStations = "https://data.boston.gov/dataset/charging-stations1";
var chargingStations = "static/data/Charging_Stations.geojson";

// Create layers
let neighborhoods = new L.layerGroup();
let stations = new L.layerGroup();

let map = L.map("map", {
    center: [42.36, -71.06],
    zoom: 11,
    layers: [streets]
});

let overlays = {
    Neighborhoods: neighborhoods,
    Stations: stations
};

// Get our GeoJSON data using d3.json
// add the data to the appropriate layer, not the map itself
d3.json(bostonNeighborhoods, function(data) {
    L.geoJSON(data).addTo(neighborhoods)
});

// layers will be added to the map via the control.
d3.json(chargingStations, function(data) {
    L.geoJSON(data).addTo(stations)
});

L.control.layers(baseMaps, overlays).addTo(map);