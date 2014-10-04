require("./WeatherSlides.styl");
var Model = require("model/Model");

var WeatherSlides = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="WeatherSlides">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";

        return (
            <div className="WeatherSlides">
                <h2>Sliders come here</h2>
                
            </div>
        );
    }
});

module.exports = WeatherSlides;
