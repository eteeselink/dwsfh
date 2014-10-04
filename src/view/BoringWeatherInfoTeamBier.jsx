

require("./BoringWeatherInfo.styl");
var Model = require("model/Model");

var BoringWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="BoringWeatherInfo">Loading!</div>;
        }

        var iconUrl = this.props.data.weather[0].main === "Rain"
          ? "http://icons.iconarchive.com/icons/iconshock/brilliant-food/128/beer-icon.png"
          : "http://www.wsdot.wa.gov/NR/rdonlyres/C8FD3175-5F5D-4A11-9E40-DC231114630E/0/TDM_icon_computer99993.gif"

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
