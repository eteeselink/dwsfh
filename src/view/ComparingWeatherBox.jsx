require("./ComparingWeatherBox.styl");
var Model = require("model/Model");

var ComparingWeatherBox = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather),
        fixed: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    thePlaceToGo() {
        return this.props.fixed;
    },

    kelvin2Celcius(kelvin) {
        return kelvin - 273.15;
    },

    toUnsigned(param) {
        return param < 0 ? param*-1 : param;
    },

    theDifference() {
        return {
            temp   : Math.round(this.kelvin2Celcius(this.props.fixed.main.temp) - this.kelvin2Celcius(this.props.data.main.temp)),
            rain   : Math.round((this.props.fixed.rain ? this.props.fixed.rain['1h'] : 0) - (this.props.data.rain ? this.props.data.rain['1h'] : 0)),
            clouds : Math.round(this.props.fixed.clouds.all - this.props.data.clouds.all)
        };
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="ComparingWeatherBox">Loading!</div>;
        }

        return (
            <div className="ComparingWeatherBox">
                <h2>Als ik jou was zou ik gaan naar <b>{this.thePlaceToGo().name}</b></h2>
                <p>Daar (het) is namelijk:</p>
                <div>
                    <b>{this.toUnsigned(this.theDifference().temp)}</b> {this.theDifference().temp === 1 ? 'graad' : 'graden'} <b>{this.theDifference().temp >= 0 ? 'warmer' : 'kouder'}</b>,<br />
                    <b>{this.toUnsigned(this.theDifference().clouds)}</b> procent <b>{this.theDifference().clouds >= 0 ? 'minder' : 'meer'} bewolkt</b>,<br />
                    {this.theDifference().rain >= 0 ? 'maar' : 'en'} er valt <b>{this.toUnsigned(this.theDifference().rain)}</b>mm <b>{this.theDifference().rain >= 0 ? 'meer' : 'minder'}</b> regen<br />
                </div>
            </div>
        );
    }
});

module.exports = ComparingWeatherBox;
