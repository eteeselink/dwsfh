var request = require('superagent');
var _ = require("lodash");

var API_ROOT = "http://zonnetjewolkje.nl/data/2.5/";

class Location {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.owmLocationName = encodeURIComponent(city + "," + country);
    }
}

class CurrentWeather {
    constructor(location) {
        this.fetchData(location);
    }

    fetchData(location) {
        request
            .get(API_ROOT + "weather?q=" + location.owmLocationName)
            .end((error, result) => {
                if(result && result.body) {
                    _.assign(this, result.body);
                    window.refreshView();
                }

            });
    }

    hasData() {
        return !!this.main;
    }
}

class WeatherData {
    constructor() {
        this.location = new Location("Leusden", "nl");
        this.currentWeather = new CurrentWeather(this.location);
    }

    setLocation(city, country) {
        this.location = new Location(city, country);
        this.currentWeather.fetchData(this.location);
    }
}

module.exports = {
    WeatherData,
    CurrentWeather,
    Location
};
