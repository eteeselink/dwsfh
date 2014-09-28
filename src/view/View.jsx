require("./View.styl");
var Model = require("model/Model");
var BoringWeatherInfo = require("./BoringWeatherInfo");

var View = React.createClass({
    getInitialState() {
        return { 
            model: new Model.WeatherData()
        };
    },

    render() {
        var model = this.state.model;
        if(!model.currentWeather.hasData()) {
            return <div className="View">Loading!</div>;
        }

        return <div className="View">
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <br/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <br/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <BoringWeatherInfo data={model.currentWeather}/>
            <br/>
        </div>;
    }
});

module.exports = View;
