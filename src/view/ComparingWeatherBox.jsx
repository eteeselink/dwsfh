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

    theDifference() {
        return {
            temp   : this.props.fixed.main.temp - this.props.data.main.temp,
            rain   : (this.props.fixed.rain ? this.props.fixed.rain['1h'] : 0) - (this.props.data.rain ? this.props.data.rain['1h'] : 0),
            clouds : this.props.fixed.clouds.all - this.props.data.clouds.all
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
                    <b>{this.theDifference().temp}</b> {this.theDifference().temp === 1 ? 'graad' : 'graden'} <b>{this.theDifference().temp >= 0 ? 'warmer' : 'kouder'}</b>,<br />
                    <b>{this.theDifference().clouds}</b> procent <b>{this.theDifference().clouds >= 0 ? 'minder' : 'meer'} bewolkt</b>,<br />
                    {this.theDifference().rain >= 0 ? 'maar' : 'en'} er valt <b>{this.theDifference().rain}</b>mm <b>{this.theDifference().rain >= 0 ? 'meer' : 'minder'}</b> regen<br />
                </div>
            </div>
        );
    }
});

module.exports = ComparingWeatherBox;
