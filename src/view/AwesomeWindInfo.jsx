require("./AwesomeWindInfo.styl");
var Model = require("model/Model");

var AwesomeWindInfo = React.createClass({
    propTypes: {
        data: React.PropTypes.instanceOf(Model.CurrentWeather)
    },

    render() {
        if(!this.props.data.hasData()) {
            return <div className="AwesomeWindInfo">Loading!</div>;
        }

        return (
            <div className="AwesomeWindInfo">
                <h2>Awesome wind in {this.props.data.name}</h2>
                <p>{this.props.data.wind.speed}!</p>
                <p>{this.props.data.wind.deg}!</p>
            </div>
        );
    }
});

module.exports = AwesomeWindInfo;
