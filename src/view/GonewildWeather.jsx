require("./GonewildWeather.styl");
var Model = require("model/Model");

var GonewildWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="GonewildWeatherInfo">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";

        return (
            <div className="GonewildWeatherInfo">
                <p>Het is <b>ALTIJD</b> kutweer in <b>Leusden</b>!</p>
            </div>
        );
    }
});

module.exports = GonewildWeatherInfo;
