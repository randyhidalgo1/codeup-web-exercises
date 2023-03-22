document.getElementById("zoomSubmit").addEventListener("click", event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});
document.getElementById("setMarker").addEventListener("click", event => {
    event.preventDefault();
    const (address = document.getElementById("setMarker");
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLonglat(coords)
            .addTo(map);
            map.setCenter(coords);
    })
});

