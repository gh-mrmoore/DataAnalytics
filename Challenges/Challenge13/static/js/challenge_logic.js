// Set tile layers using Leaflet intro code
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
// var tectonicData = "static/data/PB2002_boundaries.geojson";
var tectonicData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
var earthQuakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var majorQuakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// Create map layers
let quakeLayer = new L.layerGroup();
let plateLayer = new L.layerGroup();
let majorLayer = new L.layerGroup();

let map = L.map("map", {
    center: [42.36, -71.06],
    zoom: 3,
    layers: [streets]
});

let overlays = {
    "Earthquakes": quakeLayer,
    "Major Earthquakes": majorLayer,
    "Tectonic Plates": plateLayer
};

// Create Styling Functions
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}

// Set a minimum magnitude so we always have a radius
function getRadius(magnitude) {
    if (magnitude == 0) {
        return 1;
    } else {
        return magnitude * 4;
    };
}

// Determine color based on magnitude.
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
}

// Create legend control object
var legend = L.control({
    position: "bottomright"
});

// Change grades to magnitude

// Add details for the legend
legend.onAdd = function() {
    var div = L.DomUtil.create('div', 'info legend');
    const magnitude = [0, 1, 2, 3, 4, 5];
    const colors = [
        "#98ee00",
        "#d4ee00",
        "#eecc00",
        "#ee9c00",
        "#ea822c",
        "#ea2c2c"
      ];    

    // Loop thru magnitudes to create colored legend
    for (var i = 0; i < magnitude.length; i++) {
        // console.log(colors[i]);
        div.innerHTML +=
            "<span style='background-color: " + colors[i] + "'>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</span> " +
            magnitude[i] + (magnitude[i + 1] ? "&ndash;" + magnitude[i + 1] + "<br>" : "+");
    }
    return div;
};

legend.addTo(map);

// Get our GeoJSON data using d3.json
// Add tectonic plate data
d3.json(tectonicData, function(data) {
    L.geoJSON(data, {
        style: {color: "red", fillColor: "red", fillOpactiy: 1.0, weight: 1.5},
    }).addTo(plateLayer)
});

// Add general earthquake data from the last 7 days
// d3.json(earthQuakeData, function(data) {
//     L.geoJSON(data).addTo(quakeLayer)
// });
// d3.json(earthQuakeData).then(function(data) {
//     L.geoJSON(data, {
//         pointToLayer: function(feature, latlng) {
//             return L.circleMarker(latlng);
//         },
//         style: styleInfo(feature),
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("Magnitude: " + feature.properties.mag + "<hr />Location: " + feature.properties.place);
//         }
//     }).addTo(quakeLayer)

//     // quakeLayer.addTo(map);
// });

d3.json(earthQuakeData, function(data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        }, 
        style: styleInfo,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<hr />Location: " + feature.properties.place);
        }
    }).addTo(quakeLayer);
});

// Add layer for M4.5+ Earthquakes for last 7 days
// d3.json(majorQuakeData, function(data) {
//     L.geoJSON(data).addTo(majorLayer)
// });
d3.json(majorQuakeData, function(data) {
    function majorStyle(feature) {
        return {
            opacity: 0.75,
            fillOpacity: 0.75,
            fillColor: majorColor(feature.properties.mag),
            color: "#000000",
            radius: majorRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    function majorColor(magnitude) {
        if (magnitude > 6) { return "#00008b"; }
        if (magnitude > 5) { return "#1e90ff"; }
        return "#483d8b";
    }

    function majorRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }

    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: majorStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
        }
    }).addTo(majorLayer);
})

L.control.layers(baseMaps, overlays).addTo(map);