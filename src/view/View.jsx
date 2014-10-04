require("./View.styl");
var Model = require("model/Model");
var BoringWeatherInfo = require("./BoringWeatherInfo");
<<<<<<< HEAD
var Thermometer = require("./Thermometer");
=======
var ComparingWeatherBox = require("./ComparingWeatherBox");
var AudibleWeatherInfo = require("./AudibleWeatherInfo");
var AwesomeWeatherInfo = require("./AwesomeWeatherInfo");
var AwesomeWindInfo = require("./AwesomeWindInfo");
var GonewildWeatherInfo = require("./GonewildWeather");
var BoringWeatherInfoTeamBier = require("./BoringWeatherInfoTeamBier");

>>>>>>> 8fcede9bb6f87db1af6995995a635b979b057536
var TextBox = require("common/TextBox");

var View = React.createClass({
    getInitialState() {
        return {
            model: new Model.WeatherData()
        };
    },

    onCityChanged(newCity) {
        this.state.model.setCity(newCity);
    },

    render() {
        var model = this.state.model;

        return <div className="View">
            Beautifully show the weather in:
            <TextBox onChange={this.onCityChanged} defaultValue={model.location.city}/>

            <BoringWeatherInfo data={model.location.currentWeather}/>
            <Thermometer data={model.location.currentWeather}/>
            <GonewildWeatherInfo data={model.location.currentWeather}/>
            <br/>
            <BoringWeatherInfoTeamBier data={model.location.currentWeather}/>
            <BoringWeatherInfo data={model.betterLocation.currentWeather}/>
            <ComparingWeatherBox data={model.location.currentWeather} fixed={model.betterLocation.currentWeather} />
            <br/>
            <AwesomeWindInfo data={model.location.currentWeather}/>
            <AudibleWeatherInfo data={model.location.currentWeather}/>
            <AwesomeWeatherInfo data={model.location.currentWeather}/>
            <br/>
        </div>;
    }
});

module.exports = View;
