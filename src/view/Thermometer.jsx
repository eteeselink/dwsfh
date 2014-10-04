require("./Thermometer.styl");
var Model = require("model/Model");

var BoringWeatherInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    plus() {
      this.props.data.setTemperature(this.props.data.main.temp + 1);
    },

    minus() {
      this.props.data.setTemperature(this.props.data.main.temp - 1);
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="Thermometer">Loading!</div>;
        }

        var tempCelcius = (this.props.data.main.temp - 273.15) || 0;
        tempCelcius = Math.min(30, tempCelcius);
        tempCelcius = Math.max(0, tempCelcius);

        var pixels = tempCelcius * 3; 

        return (
          
          <div className="BoringWeatherInfo Thermometer">
            <button onClick={this.minus}>-</button>
            <svg width="120" height="120"
                 viewPort="0 0 40 120" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="20" height="100" stroke="black" stroke-width="5" fill="white" />
              <rect x="15" y={100-pixels} width="10" height={pixels} stroke="red" stroke-width="5" fill="red" />
            </svg>    
            <button onClick={this.plus}>+</button>
          </div>
        );
    }
});

module.exports = BoringWeatherInfo;
