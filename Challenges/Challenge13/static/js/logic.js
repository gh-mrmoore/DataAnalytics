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

let nightStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets,
    "Nights": nightStreets
};

// Set links to get the geojson data.
var tectonicData = "static/data/PB2002_boundaries.geojson";
var earthQuakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var majorQuakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// Create layers
let quakeLayer = new L.layerGroup();
let plateLayer = new L.layerGroup();
let majorLayer = new L.layerGroup();

let map = L.map("map", {
    center: [42.36, -71.06],
    zoom: 11,
    layers: [streets]
});

let overlays = {
    "Earthquakes": quakeLayer,
    "Major Earthquakes": majorLayer,
    "Tectonic Plates": plateLayer
};

// Get our GeoJSON data using d3.json
// add the data to the appropriate layer, not the map itself
d3.json(tectonicData, function(data) {
    L.geoJSON(data, {
        style: {color: "red", fillColor: "red", fillOpactiy: 1.0, weight: 1.5},
    }).addTo(plateLayer)
});

// layers will be added to the map via the control.
d3.json(earthQuakeData, function(data) {
    L.geoJSON(data).addTo(quakeLayer)
});

// Add layer for M4.5+ Earthquakes for last 7 days
d3.json(majorQuakeData, function(data) {
    L.geoJSON(data).addTo(majorLayer)
});

L.control.layers(baseMaps, overlays).addTo(map);