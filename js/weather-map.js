// SAN ANTONIO, TX WEATHER
$(document).ready(function() {
    let apiKey ='27e18d6e5218dbc17af1df1d2c62e1d5';
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=San+Antonio,TX,USA&units=imperial&appid=' + apiKey;
    $.getJSON(urlWeather, function(data) {
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let wind = data.speed;
        let desc = data.weather[0].description;
        let icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

        $('#weather').html('<p class="para row">Currently in ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');
    });

});

// DAILY 5 DAY FORECAST
$(document).ready(function() {
let apiKey ='27e18d6e5218dbc17af1df1d2c62e1d5';
let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=San+Antonio,TX,USA&units=imperial&appid=' + apiKey;
$.getJSON(urlForecast, function(data) {
let forecast = data.list;

html = '';
for (let i = 1; i < forecast.length; i += 8) {
    let date = new Date(forecast[i].dt * 1000);
    let day = getDayOfWeek(date.getDay());
    let temp = Math.round(forecast[i].main.temp);
    let desc = forecast[i].weather[0].description;
    let humidity = forecast[i].main.humidity;
    let wind = forecast[i].wind.speed;
    let pressure = forecast[i].main.pressure;
    let icon = 'http://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';

    html += '<div class="forecast">' +
        '<div class="forecast-container">' +
        '<p class="date">' + day + '</p>' +
        '<img src="' + icon + '">' +
        '<p class="temp">' + temp + '&deg;F</p>' +
        '<p class="desc">' + desc + '</p>' +
        '<p class="humidity">Humidity: ' + humidity + '%</p>' +
        '<p class="wind">Wind: ' + wind + ' mph</p>' +
        '<p class="pressure">Pressure: ' + pressure + ' hPa</p>' +
        '</div>' +
        '</div>';
}

$('#weather1').html(html);
});
});
function getDayOfWeek(day) {
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
return daysOfWeek[day];
}
// CLICK MAP MARKER FOR WEATHER ANYWHERE IN THE WORLD
        $('#setMarkerButton').click(function(event) {
        event.preventDefault();
        const coords = marker.getLngLat();
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${OPEN_WEATHER_APPID}`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;
        let icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        $('#weather').html('<p class="para row">Currently in A ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');

// ADDRESS WEATHER SECTION
    const address = document.getElementById("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        // map.setCenter(coords);
        map.flyTo({center: coords, zoom: 15});
        $('#weather2').html('<p class="para row">Currently in B ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');

    })
});
});