const map = L.map("map-template").setView([4.5891058, -74.1483976], 15);

const socket = io();

const tileURL = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";

L.tileLayer(tileURL).addTo(map);

map.locate({ enableHighAccuracy: true });
map.on("locationfound", (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords);
  marker.bindPopup("User 2");
  map.addLayer(marker);
});

const marker = L.marker([4.5891058, -74.1483976]);
marker.bindPopup("User 1");
map.addLayer(marker);
