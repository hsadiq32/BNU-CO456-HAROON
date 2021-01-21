// Initialize and add the map
function initMap() {
  // The location of Slough
  const slough = { lat:  51.5105, lng: -0.5950};

  // The map, centered at Slough
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: slough,
  });
  // The marker, positioned at Slough
  const marker = new google.maps.Marker({
    position: slough,
    map: map,
  });
}
