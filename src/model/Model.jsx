var request = require("superagent");
var _ = require("lodash");

// this is a cache server. all data really comes from openweathermap.org.
// API docs are at: http://openweathermap.org/api
var API_ROOT = "http://zonnetjewolkje.nl/data/2.5/";

/** 
 * A class that contains data from a JSON API response. Assigns all keys
 * in that JSON object to `this`. 
 */
class JsonDataObject {
    constructor(query) {
        this._query = query;
        this.fetchData();
    }

    fetchData() {
        request
            .get(API_ROOT + this._query)
            .end((error, result) => {
                if(result && result.body) {
                    _.assign(this, result.body);
                    window.refreshView();
                }
            });
    }
}

/**
 * The current weather for a given location
 */
class CurrentWeather extends JsonDataObject {
    constructor(owmLocationName) {
        super("weather?q=" + owmLocationName);
    }

    hasData() {
        return !!this.main;
    }
}

/**
 * 5-day forecast for a given location
 */
class Forecast extends JsonDataObject {
    constructor(owmLocationName) {
        super("forecast?q=" + owmLocationName);
    }

    hasData() {
        return this.list && this.list.length > 0;
    }
}

class Location {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        
        var owmLocationName = encodeURIComponent(city + "," + country);

        this.currentWeather = new CurrentWeather(owmLocationName);
        this.forecast = new Forecast(owmLocationName);
    }
}

/**
 * Root model object.
 */
class WeatherData {
    constructor() {
        this.location = new Location("Leusden", "nl");
        this.betterLocation = new Location("Sevilla", "es");
    }

    setCity(city) {
        this.location = new Location(city, "nl");
        window.refreshView();
    }
}

module.exports = {
    WeatherData,
    CurrentWeather,
    Forecast,
    Location
};
