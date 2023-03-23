document.getElementById("zoomSubmit").addEventListener("click", event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});
document.getElementById("setMarkerButton")
    .addEventListener("click", event => {
    event.preventDefault();
    const address = document.getElementById
    ("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
            // map.setCenter(coords);
            map.flyTo({center: coords, zoom: 15});
    })
});
const restaurants = [
    {name: "JPrime", longitude: -98.5137, latitude: 29.6094, info: "Great Lamb Chops!"},
    {name: "Silo", longitude: -98.4479, latitude: 29.4875, info: "Great Steaks!"},
    {name: "NONNA", longitude: -98.4883, latitude: 29.4206, info: "Great Bolognese!"},
]
restaurants.forEach(restaurant=>{
    const marker = new mapboxgl.Marker()
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`
        <p class="popup">${restaurant.name}</p>
        <p>${restaurant.info}</p>
                `);
    marker.setPopup(popup);
});
