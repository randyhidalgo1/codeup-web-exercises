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
    {name: "JPrime", longitude: -98.7431, latitude: 29.2672, info: "Great Steaks!"},
    {name: "Hopdoddy", longitude: -98.5831, latitude: 29.4563, info: "Great Burgers!"},
    {name: "Franklin Barbecue", longitude: -98.6382, latitude: 29.2342, info: "Great BBQ!"},
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
