require("./BoringWeatherInfo.styl");
var Model = require("model/Model");

var BoringWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        console.log(this.props.data);
        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";

        return (
            <div className="BoringWeatherInfo">
                <h2>Weather in {this.props.data.name}</h2>
                <img className="icon" src={iconUrl}/>
                <p>{this.props.data.weather[0].description}!</p>
            </div>
        );
    }
});

module.exports = BoringWeatherInfo;
