require("./AudibleWeatherInfo.styl");
var Model = require("model/Model");

var AudibleWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="AudibleWeatherInfo">Loading!</div>;
        }

        var iconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";
        var audio;

       	if (this.props.data.weather[0].main == "Rain") {
       		iconUrl = "http://pi.bzzt.net/rain.jpg";
       		audio = <a href={"http://pi.bzzt.net/rain.mp3"}>Listen</a>;
       	}

        return (
            <div className="AudibleWeatherInfo">
                <h2>Weather inn {this.props.data.name} is {this.props.data.weather[0].main}</h2>
                <img className="icon" src={iconUrl}/>
                <p>{this.props.data.weather[0].description}!</p>
                {audio}
            </div>
        );
    }
});

module.exports = AudibleWeatherInfo;
