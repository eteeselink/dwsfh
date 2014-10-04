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
                <img src="http://images.all-free-download.com/images/graphiclarge/cool_102245.jpg"/>
            </div>
        );
    }
});

module.exports = WeatherSlides;
