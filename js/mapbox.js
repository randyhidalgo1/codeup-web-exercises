document.getElementById("zoomSubmit").addEventListener("click", event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

