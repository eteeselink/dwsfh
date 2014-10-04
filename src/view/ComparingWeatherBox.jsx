require("./ComparingWeatherBox.styl");
var Model = require("model/Model");

var ComparingWeatherBox = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather),
        fixed: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="ComparingWeatherBox">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";

        return (
            <div className="ComparingWeatherBox">
                ...
                <h2>xWeather in {this.props.data.name}</h2>
                <img className="icon" src={iconUrl}/>
                <p>x{this.props.data.weather[0].description}!</p>
            </div>
        );
    }
});

module.exports = ComparingWeatherBox;
