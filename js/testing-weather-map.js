// SETTING CURRENT WEATHER WHERE STUDENT LIVES
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-98.48962, 29.4292], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
let e = {
    lngLat: {
        lat: 29.4292,
        lng: -98.48962
    }
};

// SAN ANTONIO, TX WEATHER DISPLAYED
$(document).ready(function() {
    let apiKey ="27e18d6e5218dbc17af1df1d2c62e1d5";
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=San+Antonio,TX,USA&units=imperial&appid=' + apiKey;
    $.getJSON(urlWeather, function(data) {
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let wind = data.wind.speed;
        let desc = data.weather[0].description;
        let icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

        $('#weather').html('<p class="para row">Currently in ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');
    });

});

// DAILY 5 DAY FORECAST
$(document).ready(function() {
    let apiKey ="27e18d6e5218dbc17af1df1d2c62e1d5";
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
            let icon = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';

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

// FOR MAP MARKER FOR COORDS
const marker = new mapboxgl.Marker()
    .setLngLat(e.lngLat)
    .addTo(map);
map.on('click', function(e) {
    marker.setLngLat(e.lngLat);
    console.log(e.lngLat);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=imperial&appid=${OPEN_WEATHER_APPID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let city = data.name;
            let temp = Math.round(data.main.temp);
            let wind = data.wind.speed;
            let desc = data.weather[0].description;
            let icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            console.log(data)

            $('#weather').html('<p class="para row">Currently in ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');

        });
// DAILY 5 DAY FORECAST FOR MAP MARKER
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=imperial&appid=${OPEN_WEATHER_APPID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
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


// ADDRESS WEATHER SECTION
const marker1 = new mapboxgl.Marker()
    .setLngLat(e.lngLat)
    .addTo(map);

$('#setAddressButton').click(function(event) {
    event.preventDefault();
    let address = $('#setMarker').val();

    // Use the Mapbox API to get the latitude and longitude of the address
    $.getJSON(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_API_TOKEN}`, function(data) {
        let coords = data.features[0].center;
        marker1.setLngLat(coords); // Set the marker's position on the map
        map.flyTo({
            center: coords,
            zoom: 9
        });

        // Use the OpenWeather API to get the weather for the latitude and longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[1]}&lon=${coords[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                // Display the current weather
                let html = `
                    <div class="current-weather">
                        <h2>Current Weather for ${data.name}</h2>
                        <p>${data.weather[0].description}</p>
                        <p>Temperature: ${data.main.temp}&deg;F</p>
                        <p>Feels like: ${data.main.feels_like}&deg;F</p>
                        <<p>Humidity: ${data.main.humidity}%</p>
                    </div>
                `;
                $('#weather').html(html);
            });

        // Use the OpenWeather API to get the 5-day forecast for the latitude and longitude
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[1]}&lon=${coords[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                // Display the 5-day forecast
                let html = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    let date = new Date(data.list[i].dt * 1000);
                    let dayOfWeek = getDayOfWeek(date.getDay());
                    let temperature = Math.round(data.list[i].main.temp);
                    let description = data.list[i].weather[0].description;
                    let humidity = data.list[i].main.humidity;
                    let windSpeed = data.list[i].wind.speed;
                    let pressure = data.list[i].main.pressure;
                    let iconUrl = `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;

                    html += `
                        <div class="forecast">
                            <h3>${dayOfWeek}</h3>
                            <img src="${iconUrl}">
                            <p>Temperature: ${temperature}&deg;F</p>
                            <p>${description}</p>
                            <p>Humidity: ${humidity}%</p>
                            <p>Wind: ${windSpeed} mph</p>
                            <p>Pressure: ${pressure} hPa</p>
                        </div>
                    `;
                }
                $('#weather1').html(html);
            });
    });
});
