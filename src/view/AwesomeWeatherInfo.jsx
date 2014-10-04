require("./AwesomeWeatherInfo.styl");
var Model = require("model/Model");

var AwesomeWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="BoringWeatherInfo">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";

        return (
            <div className="BoringWeatherInfo">
                <div className="now">
                  Weather is now.
                </div>
                <div className="later">
                  Weather later.
                </div>
      
                <h2>Awesome!</h2>
                <h2>Weather in {this.props.data.name}</h2>
                <img className="icon" src={iconUrl}/>
                <p>{this.props.data.weather[0].description}!</p>
            </div>
        );
    }
});

module.exports = AwesomeWeatherInfo;
