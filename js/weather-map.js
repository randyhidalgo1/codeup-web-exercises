$(document).ready(function() {
    let apiKey = '61ce4662518bf73051bdd0b81d44c0c4';
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=San+Antonio,TX,USA&units=imperial&appid=' + apiKey;
    $.getJSON(urlWeather, function(data) {
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;
        let icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

        $('#weather').html('<p class="para">Current weather for ' + city + ': ' + temp + '&deg;F and ' + desc + '</p><img src="' + icon + '">');
    });
});

$(document).ready(function() {
    let apiKey = '61ce4662518bf73051bdd0b81d44c0c4';
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

        $('#weather').html(html);
    });
});

function getDayOfWeek(day) {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[day];
}

