require("./View.styl");
var Model = require("model/Model");
var BoringWeatherInfo = require("./BoringWeatherInfo");
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
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <br/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <BoringWeatherInfo data={model.betterLocation.currentWeather}/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <br/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <BoringWeatherInfo data={model.location.currentWeather}/>
            <br/>
        </div>;
    }
});

module.exports = View;
