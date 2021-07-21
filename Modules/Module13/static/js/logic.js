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

let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

let baseMaps = {
    Street: streets,
    Satellite: satelliteStreets
};

// set data URL
let torontoNh = "https://raw.githubusercontent.com/gh-mrmoore/DataAnalytics/PolygonGeoJSON/Modules/Module13/static/js/torontoNeighborhoods.json";

// Simplify styling with an object
let mapStyle = {
    color: "yellow",
    weight: 1
};

// Get data and map it
d3.json(torontoNh).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: mapStyle,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("Welcome to " + feature.properties.AREA_NAME);
        }
    }).addTo(map);
});

// Pass and add
L.control.layers(baseMaps).addTo(map);