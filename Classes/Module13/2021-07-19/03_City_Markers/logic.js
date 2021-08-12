// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
let cityMarkers = [
  {
    location: [40.7128, -74.0059],
    name: "New York",
    population: "8,398,748"
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: "2,705,994"
  }, 
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: "2,325,502"
  }, 
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: "3,990,456"
  }, 
  {
    location: [41.2565, -95.9345],
    name: "Omaha",
    population: "479,978"
  }
];

// Add code to create a marker for each city below and add it to the map
cityMarkers.forEach(function(city) {
  console.log(city);
  L.marker(city.location)
  .bindPopup(city.name + " <br /> Population: " + city.population)
  .addTo(myMap);
});