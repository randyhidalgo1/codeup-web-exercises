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
    {name: "JPrime", longitude: -97.7431, latitude: 30.2672, info: "Great Steaks!"},
    {name: "Hopdoddy", longitude: -92.7431, latitude: 32.2672, info: "Great Burgers!"},
    {name: "Franklin Barbecue", longitude: -96.7431, latitude: 35.2672, info: "Great BBQ!"},
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







//
// const map = L.mapbox
//     .map('map')
//     .setView([40, -74.5], 9)
//     .addLayer(
//         L.mapbox.styleLayer(
//             'mapbox://styles/mapbox/streets-v12'
//         )
//     );
//
// restaurants.features.forEach(function (store, i) {
//     restaurants.properties.id = i;
// });
// map.on('load', () => {
//     /* Add the data to your map as a layer */
//     map.addLayer({
//         id: 'locations',
//         type: 'circle',
//         /* Add a GeoJSON source containing place coordinates and information. */
//         source: {restaurants/GeoJSON},
//             type: 'point',
//             data: restaurants
//         }
//     });
//

